const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const cors = require("cors")({
  origin: true,
});
const admin = require("firebase-admin");
admin.initializeApp();

exports.emailMessage = functions.https.onRequest((req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  return cors(req, res, () => {
    const data = req.body;
    const output = `
    <p>You have a new contact request!</p>
    <h3>Contact details</h3>
    <p>Email: ${data.email}</p>
    <h3>Message</h3>
    <p>${data.message}</p>
    `;

    const mailOptions = {
      from: '"S2P Website" <luisplsp@gmail.com>', // sender address
      to: "stepstopodium@gmail.com", // list of receivers
      subject: `${data.subject}`, // Subject line
      html: output, // plain text body
    };

    return transporter
      .sendMail(mailOptions)

      .then(() =>
        //console.log("Message")
        res.status(200).send({
          msg:
            "Your email has been sent. We'll get back to you has soon as possible!",
        })
      )
      .catch(() => console.log(error));
    // if (error) {
    //   return console.log(error);
    // }
    // console.log("Message");
    // res.status(200).send({
    //   msg:
    //     "Your email has been sent. We'll get back to you has soon as possible!",
    // });
  });
});
//});

// let stuff = transporter.sendMail(mailOptions, (error) => {
//   // if (error) {
//   //   return console.log(error);
//   // }
//   console.log("Message");
//   res.status(200).send({
//     msg:
//       "Your email has been sent. We'll get back to you has soon as possible!",
//   });
// });
