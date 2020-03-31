const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();

// View engine setup
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Static folder
app.use("./client/src", express.static(path.join("App")));

// app.post("/send", (req,res) => {
//     console.log(req.body);
// });


app.get("./client/src/App.vue", (req, res) => {

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "stepstopodium@gmail.com",
        pass: "Subaru94000s2p"
    }
});

let mailOptions = {
    from:"luisplsp@gmail.com",
    to: "stepstopodium@gmail.com",
    subject: "Testing and Testing",
    text: "it works"
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log("erros Ocurs");
    } else {
        console.log("Email sent!!!");
    }
})
});


app.listen(3000, () => console.log("Listening on port 3000!"));
