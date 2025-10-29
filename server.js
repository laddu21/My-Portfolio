const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const intelligentChatbot = require('./intelligentChatbot');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Portfolio Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: 'Thank you! Your message has been sent.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
});

app.get('/api/projects', (req, res) => {
    const projects = require('./data/projects.json');
    res.json(projects);
});

app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    if (!message || message.trim() === '') {
        return res.status(400).json({ error: 'Message is required.' });
    }

    try {
        const result = intelligentChatbot.processMessage(message);
        res.json({ response: result.response });
    } catch (error) {
        console.error('Chat processing error:', error);
        res.status(500).json({ error: 'Failed to process message. Please try again.' });
    }
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});