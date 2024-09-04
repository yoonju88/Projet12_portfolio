const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require ('mongoose')
const cors = require('cors')
app.use(bodyParser.json());//Midllewaore
//parameter of cors
app.use(cors({
    origin: '*', // 모든 도메인에서의 요청을 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
mongoose.connect (MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => console.log('Connection to MongoDB'))
.catch( err => console.error ('Error connecting to MongoDB', err))

const FormSchema = new mongoose.Schema ({
    nom: String,
    email: String,
    message: String
})

const FormData = mongoose.model('FormData', FormSchema)

app.post('/submit-form', async(req, res) => {
    const {nom, email, message} = req.body
    console.log(`Received message from ${nom} (${email}) : ${message}`)
    if (!nom || !email || !message) {
        return res.status(400).json({ status: 'error', message: 'please fill out all the field.' });
    }
    try {
        const formData = new FormData({nom, email, message})
        await formData.save()
        res.json ({status: 'success', message:'form data saved successfully.'})
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ status: 'error', message: 'form data saved failed' });
    }   
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
