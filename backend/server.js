const express = require('express');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const sendEmail = require('./sendEmail');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

//parameter of cors
app.use(cors({
    origin: '*',  // 모든 출처 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';

app.post('/contact/submit', async(req, res) => {
    const { nom, email, message } = req.body;
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
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
