const admin = require("../firebase/firebase"); // Ensure your Firebase admin SDK is properly initialized
const Notification = require("../models/Notification"); // Mongoose model for Notification

async function sendFirebaseNotification(messageBody) {

  const fbmessage = {
    notification: {
      title: messageBody.title,
      body: messageBody.message,
    },
    token: messageBody.fcmToken, // recipient device registration  fcmtoken
  };
  try {
    const response = await admin.messaging().send(fbmessage);
    console.log("Firebase notification sent successfully:", response);
   await Notification.updateOne({_id:messageBody._id}, {status:"sent"});
    //TODO: Handle retry in case of failure
  } catch (error) {
    console.error("Error sending Firebase notification:", error);
  }
}

module.exports = { sendFirebaseNotification };
