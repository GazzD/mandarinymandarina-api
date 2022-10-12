const express = require('express');
const router = express.Router();

const newsLetterService = require('../services/newsletter.service');

const subscribe = (req, res) => {
    try {
        newsLetterService.subscribe(req.body);
        res.status(200).json({ message: 'Successful subscription!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const healthCheck = (req, res) => {
    try {
        const response = newsLetterService.healthCheck();
        response.then((result) => {
            res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    subscribe,
    healthCheck
};