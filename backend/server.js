//Importazione dei moduli necessari
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
require('dotenv').config();

//Creazione dell'app Express
const app = express();
const port = 5000;

// Configura la connessione a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


// Middleware
app.use(cors());
app.use(express.json());

// Rotta di base per verificare che il server funzioni
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Importazione delle rotte 


// Uso delle rotte


// Avvia il server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
