require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a test account or replace with real credential.
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
async function mail(sendFrom, sendTo, sendSubject, textBody) {
  const info = await transporter.sendMail({
    from: sendFrom, // '"Maddison Foo Koch" iglesiacristo.mi@gmail.com',
    to: sendTo, // 'iglesiacristo.mi@gmail.com, pndafran@gmail.com',
    subject: sendSubject, // 'Hello ✔',
    // text: 'Hello world?', // plain‑text body
    html: textBody, // '<b>Hello world?</b>', // HTML body
  });

  console.log('Message sent:', info.messageId);

  return info.messageId;
}

module.exports = {
  mail,
};
