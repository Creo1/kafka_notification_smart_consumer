const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    mongoUri: process.env.MONGO_DEV_CONNECTION_STRING,
    port: process.env.PORT,
    kafkaDevBrokerURL1: process.env.KAFKA_DEV_BROKER_URL1,
    kafkaDevBrokerURL2: process.env.KAFKA_DEV_BROKER_URL2,
    kafkaDevBrokerURL3: process.env.KAFKA_DEV_BROKER_URL3,
    gupshupApiKey: process.env.GUPSHUP_API_KEY,
    gupshupApiUrl: process.env.GUPSHUP_API_URL,
    hspApiKey: process.env.HSP_API_KEY,
    hspApiUrl: process.env.HSP_API_URL,
    hspApiUsername: process.env.HSP_API_USERNAME,
    hspSenderName: process.env.HSP_SENDER_NAME,
    hspSMSType: process.env.HSP_SMS_TYPE,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    senderEmailId: process.env.SENDER_EMAIL_ID
  },

  production: {
    mongoUri: process.env.MONGO_PROD_CONNECTION_STRING,
    port: process.env.PORT,
    kafkaProdBrokerURL1: process.env.KAFKA_DEV_BROKER_URL1,
    kafkaProdBrokerURL2: process.env.KAFKA_DEV_BROKER_URL2,
    kafkaProdBrokerURL3: process.env.KAFKA_DEV_BROKER_URL3,
    gupshupApiKey: process.env.GUPSHUP_API_KEY,
    gupshupApiUrl: process.env.GUPSHUP_API_URL,
    hspApiKey: process.env.HSP_API_KEY,
    hspApiUrl: process.env.HSP_API_URL,
    hspApiUsername: process.env.HSP_API_USERNAME,
    hspSenderName: process.env.HSP_SENDER_NAME,
    hspSMSType: process.env.HSP_SMS_TYPE,
    sendgridProdApiKey: process.env.SENDGRID_API_KEY,
    senderEmailId: process.env.SENDER_EMAIL_ID
  },
};
