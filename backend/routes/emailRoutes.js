require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// Configura Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// API per inviare email
router.post("/send-email", async (req, res) => {
    const { email, message } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Nuovo messaggio dal Portfolio",
            text: `Email: ${email}\nMessaggio: ${message}`,
        });

        res.json({ success: true, message: "Email inviata con successo!" });
    } catch (error) {
        console.error("Errore nell'invio dell'email:", error);
        res.status(500).json({ success: false, message: "Errore nell'invio dell'email." });
    }
});

module.exports = router;