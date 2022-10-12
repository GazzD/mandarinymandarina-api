const express = require('express');
const router = express.Router();

const newsLetterController = require('../controllers/newsletter.controller');

router.post('/subscribe', (req, res) => {
    newsLetterController.subscribe(req, res);
});

router.get('/health-check', (req, res) => {
    newsLetterController.healthCheck(req, res);
});

module.exports = router; 