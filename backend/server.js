const express = require('express');
const bodyParser = require("body-parser");
const sendEmail = require('./sendEmail');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(cors({
//     origin: 'https://localhost:3000'
//   }));
//parameter of cors
const corsOption = {
    origin: (origin, callback) => {
        const whiteList = [
            "https://yoonju88.github.io",
            "https://localhost:3000"
        ]
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("non authorisé"))
        }
    }
}
app.use(cors(corsOption))

app.post('/send', async (req, res) => {
    console.log('Received request at /send');
    const { nom, email, message } = req.body;
    console.log('Received request body:', req.body);
    try {
        const result = await sendEmail({ nom, email, message });
        if (result.success) {
            res.json({ state: 'success', message: 'Email envoyé avec succès' });
        } else {
            res.json({ state: 'error', message: result.error });
        }
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ state: 'error', message: 'Erreur lors de l\'envoi du message' });
    }
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
