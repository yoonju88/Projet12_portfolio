const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Configuration du transporteur de mails (ici avec Gmail, mais cela dépend de votre fournisseur)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'votre.email@gmail.com', // Votre adresse email
        pass: 'votre_mot_de_passe' // Votre mot de passe email
    }
});
// Fonction pour envoyer un email
async function sendEmail({ nom, email, message }) {
    try {
        // Configuration de l'email
        const mailOptions = {
            from: email, // Adresse de l'expéditeur
            to: 'votre.email@gmail.com', // Adresse du destinataire
            subject: `Nouveau message de ${nom}`, // Sujet de l'email
            text: message, // Contenu du message
        };
        // Envoi de l'email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé: ' + info.response);
        return { success: true };
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return { success: false, error: error.message };
    }
}
module.exports = sendEmail;