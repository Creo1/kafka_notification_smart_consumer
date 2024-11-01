const axios = require("axios");
const config = require("../config/config");
const SMS_TEMPLATES = require("../utils/smsTemplates");
const moment = require("moment");
const Notification = require("../models/Notification");

const API_KEY = config.development.hspApiKey;
const API_URL = config.development.hspApiUrl;
const USER_NAME = config.development.hspApiUsername;
const SENDER_NAME = config.development.hspSenderName;
const SMS_TYPE = config.development.hspSMSType;

function replacePlaceholders(template, variables) {
  return template.replace(/\${(.*?)}/g, (_, key) => variables[key] || "");
}

async function sendSms(messageBody) {
  const variables = {};
  if (messageBody.name) {
    variables.name = messageBody.name;
  }
  if (messageBody.orderId) {
    variables.orderNumber = messageBody.orderId;
  }
  if (messageBody.deliveryDate) {
    variables.deliveryDate = moment(messageBody.deliveryDate).format('DD-MMM-YYYY');
  }
  if (messageBody.newDeliveryDate) {
    variables.newDeliveryDate = moment(messageBody.newDeliveryDate).format('DD-MMM-YYYY');
  }
  if (messageBody.pickupDate) {
    variables.pickupDate =moment(messageBody.pickupDate).format('DD-MMM-YYYY');
  }

  const message = replacePlaceholders(
    SMS_TEMPLATES[messageBody.smsTemplateCategory],
    variables
  );
  const encodedMessage = encodeURIComponent(message);
  try {
    const response = await axios.get(
      API_URL +
        `?username=${USER_NAME}&message=${encodedMessage}&sendername=${SENDER_NAME}&smstype=${SMS_TYPE}&numbers=${messageBody.to}&apikey=${API_KEY}`,
      {
        params: {
          api_key: API_KEY,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("SMS message sent successfully:", response.data);
    await Notification.updateOne({_id:messageBody._id}, {status:"sent"});
    //TODO: Handle retry in case of failure
  } catch (error) {
    console.error(
      "Error sending SMS message:",
      error.response ? error.response.data : error.message
    );
  }
}

module.exports = { sendSms };
