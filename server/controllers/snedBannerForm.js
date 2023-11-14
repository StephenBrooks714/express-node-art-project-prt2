const nodemailer = require('nodemailer');
require("dotenv").config()

module.exports = (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: "smtp.gmail.com",
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        },
        tls : { rejectUnauthorized: false },
        secure: true,
    });
    const {from} = req.body

    const mailDetails = {
        to: process.env.EMAIL,
        replyTo: from,
        subject: "Subscribe me",
        headers: {
            'Atranet Marketing': 'high'
        },
        date: new Date('2000-01-01 00:00:00'),
        html: `<p>I want to subsrcibe to your email and be a part of your listing</p>`,
    };

    transporter.sendMail(mailDetails, function(err, info) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/")
            console.log(info)
        }
    });
}