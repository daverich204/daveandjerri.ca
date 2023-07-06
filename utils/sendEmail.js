// utils/sendEmail.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({ to, subject, text }) {
  const msg = {
    to,
    from: 'info@viralvantage.ca', // Replace this with your email address
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    console.log("error.response => ", error.response)
    const { errors } = error.response.body
    console.log("errors => ", errors);
  }
}