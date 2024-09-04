const nodemailer = require('nodemailer');
// Configuration du transporteur de mails (ici avec Gmail, mais cela dépend de votre fournisseur)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Votre adresse email
        pass: process.env.EMAIL_PASS // Votre mot de passe email
    }
});
// Fonction pour envoyer un email
const sendEmail = async ({ nom, email, message }) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_RECEIVER, 
        subject: `Contact Form Submission`, 
        text: `Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`, 
    };
    try {
        await transporter.sendMail(mailOptions)
        return {success : true };
    } catch (error) {
        console.error('Error sending email:', error)
        return {success: false, error: error.message }
    }     
}
module.exports = sendEmail;