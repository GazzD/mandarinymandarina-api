const express = require('express');
const router = express.Router();

const contactService = require('../services/contact.service');

const sendContactEmail = (req, res) => {
    try {
        contactService.sendContactEmail(req.body);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    sendContactEmail
};