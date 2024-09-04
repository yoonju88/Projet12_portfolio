const express = require('express');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const sendEmail = require('./sendEmail');

const app = express();
const cors = require('cors')
app.use(bodyParser.json());

//parameter of cors
app.use(cors({
    origin: '*', 
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
