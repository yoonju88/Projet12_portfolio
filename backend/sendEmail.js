const nodemailer = require('nodemailer');
require("dotenv").config()
// Configuration du transporteur de mails (ici avec Gmail, mais cela dépend de votre fournisseur)
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
  },
});
// Fonction pour envoyer un email
const sendEmail = ({ nom, email, message }) => {
    return new Promise((resolve, reject)=> {
        const mailOptions = {
            from: email, 
            to: process.env.EMAIL_USER,
            subject: `Contact Form Submission`, 
            text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`, 
        };   
        transporter.sendMail(mailOptions, (error, info)=>{
            console.log(error, info)
            if (error){
                return reject({success : false, info:info }) ;
            }
            return resolve({success : true });
        })
    })
}
module.exports = sendEmail;