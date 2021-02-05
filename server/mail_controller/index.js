const nodemailer = require("nodemailer");
const db = require("../db");
const validator = require("email-validator");
const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "agmaster304@gmail.com",
        pass: "kamaro312"
    }
});

function sendMail(req) {
    const mailOptions = {
        from: req.body.email,
        to: "agas89@inbox.ru",
        subject: "Question",
        text: `Քեռի նամակ է ուղղարկե քեզ ${req.body.email} -ը ասումա՝\n ${req.body.message}`
    };
    if (validator.validate(req.body.email)) {
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    }
}

function sendMailToUser(req, res) {
    let txt = Math.floor(Math.random() * 10000);
    let email = req.body.email;
    const mailOptions = {
        from: "AG MASTER",
        to: email,
        subject: "AG MASTER",
        text: "Շնորհակալություն մեզ դիմելու համար։Մենք Ձեզ կպատասխանենք 24ժ ընթացքում։ "
    };
    if (validator.validate(email)) {
        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({ isSend: false, info: `${error}` });
            } else {
                console.log("Email sent: " + info.response);
                res.json({ registrationCode: txt, isSend: true, info: "message is sent" });
            }
        });
    } else {
        console.log("mail validation error", validator.validate(email));
        res.json({ isSend: false, info: "Email validation error" });
    }
}

module.exports = {
    sendMail,
    sendMailToUser,
};