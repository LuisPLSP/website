const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const mailgun = require("mailgun-js");

const router = express.Router();

const port = 3000;

const app = express();

const routes = require("./routes/index");


//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/client", express.static(path.join(__dirname, "client")));

//Static folder
// app.use("/client", express.static(path.join(__dirname, "client")));

// app.get("/client/src", (req, res) => {
//     res.render("App");
// });

// const DOMAIN = "sandboxf1bda0782f1148f798deec07755f4e1a.mailgun.org";
// const mg = mailgun({
//   apiKey: "c2a9d53edd3c0b922cc66734e6378cf8-46ac6b00-b1be91b6",
//   domain: DOMAIN
// });
// const data = {
//   from:
//     "Website <postmaster@sandboxf1bda0782f1148f798deec07755f4e1a.mailgun.org>",
//   to: "luisplsp@gmail.com",
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!"
// };

// mg.messages().send(data, function(error, body) {
//   console.log(body);
// });


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", routes);


app.listen(port, () => console.log("Listening on port 3000!"));

// app.get("/client/src", (req, res) => {
//   console.log(req.body);
//   res.sendFile("App.vue");
// });

// app.post("/send", (req, res) => {

//   const output = `
//     <p>You have a new contact request</p>
//     <ul>
//         <li>${req.body.form.email}</li>
//         <li>${req.body.form.subject}</li>
//         <li>${req.body.form.message}</li>
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

// app.get("./client/src/App.vue", (req, res) => {

// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "stepstopodium@gmail.com",
//         pass: "Subaru94000s2p"
//     }
// });

// let mailOptions = {
//     from:"luisplsp@gmail.com",
//     to: "stepstopodium@gmail.com",
//     subject: "Testing and Testing",
//     text: "it works"
// };

// transporter.sendMail(mailOptions, function(err, data) {
//     if (err) {
//         console.log("erros Ocurs");
//     } else {
//         console.log("Email sent!!!");
//     }
// })
// });

