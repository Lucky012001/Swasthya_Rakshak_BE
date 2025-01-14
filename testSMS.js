const { sendSMS } = require('./utils/twilio');

(async () => {
    try {
        const phoneNumber = '+919926642925'; // Recipient ka phone number
        const message = 'Your appointment is confirmed!';
        await sendSMS(phoneNumber, message);
        console.log('SMS sent successfully!');
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
