require("dotenv").config()
var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

module.exports = (req, res) => {
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
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let info = transporter.sendMail({
      from: '"S2P Website" <stepstopodium@gmail.com>', // sender address
      to: "stepstopodium@gmail.com", // list of receivers
      subject: `${data.subject}`, // Subject line
      html: output // plain text body
    })
    .then(() => {
      res.send({msg: "Your email has been sent. We'll get back to you has soon as possible!"});
      });
  }