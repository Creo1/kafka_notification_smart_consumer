const sgMail = require("@sendgrid/mail");
const config = require("../config/config");
const Notification = require("../models/Notification");

// Set your SendGrid API key
sgMail.setApiKey(config.development.sendgridApiKey);

const sendMail = async (messageBody) => {
  console.log("email messageBody ", messageBody);

  const to = messageBody.email;
  const from = config.development.senderEmailId;
  const subject = messageBody.title;
  const text = messageBody.message;
  const html = `<p>${messageBody.message}</p>`;

  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");
    await Notification.updateOne({ _id: messageBody._id }, { status: "sent" });
    //TODO: handle retry if failed
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
  sendMail,
};
