const admin = require("firebase-admin");
admin.initializeApp();
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const cors = require("cors")({
  origin: true,
});


exports.emailMessage = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const data = req.body;
    const output = `
    <p>You have a new contact request!</p>
    <h3>Contact details</h3>
    <p>Email: ${data.email}</p>
    <h3>Message</h3>
    <p>${data.message}</p>
    `;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailEmail,
        pass: gmailPassword,
      },
    });
    console.log("accessing gmail...");
    const mailOptions = {
      from: '"S2P Website" <luisplsp@gmail.com>', // sender address
      to: "stepstopodium@gmail.com", // list of receivers
      subject: `${data.subject}`, // Subject line
      html: output, // plain text body
    };
    try {
      transporter.sendMail(mailOptions);
      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });
});
