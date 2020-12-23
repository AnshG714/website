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

  const respMessage = {
    to: email,
    from: process.env.EMAIL_ADDRESS,
    subject: "Hey there! I've received your message 😄",
    text: `Hey ${
      name.split(" ")[0]
    },\n\nI've received your message that you put across through my website! I'll get back to you as soon as I can!\n\nBest,\nAnsh`,
  };
  sgMail
    .send(msg)
    .then(() => {
      sgMail
        .send(respMessage)
        .then(() => cb(true))
        .catch((err) => {
          console.log("An error occured in sending the response email.");
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("An error occured in recording the message.");
      console.log(err);
      cb(false);
    });
}

module.exports = send;
