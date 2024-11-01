const axios = require('axios');
const config = require('../config/config');

const API_KEY = config.development.gupshupApiKey;
const API_URL = config.development.gupshupApiUrl;

async function sendWhatsAppMessage(messageBody) {
  try {
    const response = await axios.post(API_URL, {
      channel: 'whatsapp',
      source: 'YOUR_WHATSAPP_SOURCE_NUMBER',
      destination: messageBody.to,
      message: {
        type: 'text',
        text: messageBody.message,
      },
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log("WhatsApp message sent successfully:", response.data);
     //TODO: update notification status to sent in db
    //TODO: Handle retry in case of failure
  } catch (error) {
    console.error("Error sending WhatsApp message:", error.response ? error.response.data : error.message);
  }
}

module.exports = { sendWhatsAppMessage };
