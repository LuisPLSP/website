const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const mailgun = require("mailgun-js");



router.post("/sendEmail", (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("send email");
    res.send("send email");
});
// }); 
    // console.log(req.body);
    // res.send(req.body);

// const DOMAIN = "sandboxf1bda0782f1148f798deec07755f4e1a.mailgun.org";
// const mg = mailgun({
//     apiKey: "c2a9d53edd3c0b922cc66734e6378cf8-46ac6b00-b1be91b6",
//     domain: DOMAIN
// });
// const data = {
//     from:
//     "Website <postmaster@sandboxf1bda0782f1148f798deec07755f4e1a.mailgun.org>",
//     to: "luisplsp@gmail.com",
//     subject: "Hello",
//     text: "Testing some Mailgun awesomness!"
// };

// mg.messages().send(data, function(error, body) {
//     console.log(body);
// });

// router.post("/sendEmail", (req, res) => {
//   const output = `
//     <p>You have a new contact request</p>
//     <ul>
//         <li>${req.body.email}</li>
//         <li>${req.body.subject}</li>
//         <li>${req.body.message}</li>
//     </ul>
//     `;

//   let transporter = nodemailer.createTransport(mailgun(mg))
// //   {
// //     service: "gmail",
// //     auth: {
// //       user: "stepstopodium@gmail.com",
// //       pass: "Subaru94000s2p"
// //     }
// //   });

//   let mailOptions = {
//     from: '"Website" <luisplsp@gmail.com>',
//     to: "stepstopodium@gmail.com",
//     subject: "Testing and Testing",
//     text: "it works",
//     html: output
//   };

//   transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//       res.status(500).json("erros Ocurs");
//     } else {
//       console.log("Email sent!!!");
//     }
//   });
// });

module.exports = router;
