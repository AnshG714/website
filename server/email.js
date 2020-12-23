require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);

function send(name, email, message, cb) {
  const msg = {
    to: process.env.EMAIL_ADDRESS,
    from: process.env.EMAIL_ADDRESS,
    subject: "🔔 Someone messaged you through your website! 🚀",
    text: `Hi Ansh! \n\n Someone messaged you from your website. \n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };
  sgMail
    .send(msg)
    .then(() => cb(true))
    .catch((err) => {
      console.log(err);
      cb(false);
    });
}

module.exports = send;
