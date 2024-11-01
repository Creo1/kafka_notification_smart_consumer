const { Kafka } = require("kafkajs");
const { sendWhatsAppMessage } = require("./gupshupService");
const { sendSms } = require("./hspService");
const { sendFirebaseNotification } = require("./firebaseService");
const { sendMail } = require("./emailService");
const config = require("../config/config");

const kafka = new Kafka({
  clientId: "my-consumer-app",
  brokers: [config.development.kafkaDevBrokerURL1,config.development.kafkaDevBrokerURL2,config.development.kafkaDevBrokerURL3],
});

const consumer = kafka.consumer({ groupId: "my-consumer-group" });

async function runConsumer() {
  try {
    await consumer.connect();
    console.log("Kafka consumer connected");

    await consumer.subscribe({
      topic: "notification-topic",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const parsedMessage = JSON.parse(message.value.toString());
          const { notificationType } = parsedMessage;

          switch (notificationType) {
            case "sms":
              await sendSms(parsedMessage);
              break;
            case "whatsapp":
              await sendWhatsAppMessage(parsedMessage);
              break;
            case "push":
              await sendFirebaseNotification(parsedMessage);
              break;
            case "email":
              await sendMail(parsedMessage);
              break;
            case "all":
              console.log("sending all type notification");
              await sendSms(parsedMessage);
              await sendFirebaseNotification(parsedMessage);
              await sendMail(parsedMessage);
              break;
            default:
              console.log("Unknown message type");
          }
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });

    console.log("Kafka consumer is running");
  } catch (error) {
    console.error("Error running Kafka consumer:", error.message);
  }
}

module.exports = { runConsumer };
