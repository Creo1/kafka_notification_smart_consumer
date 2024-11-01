const SMS_TEMPLATES = {
  order_confirmation:
    "Hi ${name}, your  order ${orderNumber} has been successfully placed. Expected delivery by ${deliveryDate}. To track your order, open  app. Thank you for shopping with us! - TEAM ABC",
  order_shipped:
    "Good news, ${name}! Your order ${orderNumber} has been shipped and is on its way. Estimated delivery: ${deliveryDate}. Track your package in the app. - TEAM ABC",
  out_for_delivery:
    "Hi ${name}, your order ${orderNumber} is out for delivery today. Please ensure someone is available to receive it. Track the delivery in the app. - TEAM ABC",
  delivery_attempted:
    "Hi  ${name}, our delivery executive attempted to deliver your order ${orderNumber} but was unable to reach you. Please contact us to reschedule. Track your order in the  app. - TEAM ABC",
  order_delivered:
    "Hi ${name}, your order ${orderNumber} has been successfully delivered. We hope you love it! Please share your feedback in the app. - TEAM ABC",
  order_delayed:
    "Dear ${name}, we regret to inform you that your order ${orderNumber} is delayed due to unforeseen circumstances. We are working to get it to you by ${newDeliveryDate}. Thank you for your patience. - TEAM ABC",
  order_cancelled:
    "Hi ${name}, your order ${orderNumber} has been canceled as per your request. If you have any questions, please contact our support team via the  app. We hope to serve you again soon. - TEAM ABC",
  return_requested:
    "Hi ${name}, your return request for order ${orderNumber} has been received. We will arrange for a pickup by ${pickupDate}. Track the status in the app. - TEAM ABC",
  return_picked_up:
    "Hi ${name}, the return for your order ${orderNumber} has been picked up. Your refund will be processed shortly. Thank you for shopping with us. - TEAM ABC",
  refund_processed:
    "Hi ${name}, your refund for order ${orderNumber} has been processed and will reflect in your account within 7 days. Thank you for shopping with us! - TEAM ABC",
  exchange_request_confirmed:
    "Hi ${name}, your exchange request for  order ${orderNumber} has been confirmed. The new item will be delivered by ${deliveryDate}. Track the status in the app. - TEAM ABC",
  exchange_delivered:
    "Hi ${name}, your exchange item for  order ${orderNumber} has been successfully delivered. Thank you for choosing us! - TEAM ABC",
  login_otp:
    "Hi ${name}, your  OTP for login is ${otpCode}. This code is valid for 10 minutes. Please do not share it with anyone. - TEAM ABC",
  user_registration:
    "Welcome to ABC, ${name}! Your account has been successfully created. Start shopping and enjoy exclusive deals. - TEAM ABC",
  user_sign_in_alert:
    "Hi ${name}, your  account was just signed into from a new device. If this wasn't you, please reset your password immediately. - TEAM ABC",
  return_request_accepted:
    "Hi ${name}, your return request for  order ${orderNumber} has been accepted. We will process your return and refund shortly. Track the status in the app. - TEAM ABC",
  return_request_rejected:
    "Hi ${name}, your return request for order ${orderNumber} has been rejected. Please check the app for details or contact support. - TEAM ABC",
  password_reset:
    "Hi ${name}, use this code ${resetCode} to reset your password. This code is valid for 10 minutes. Please do not share it with anyone. - TEAM ABC",
};

module.exports = SMS_TEMPLATES;
