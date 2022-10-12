const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller');

router.post('/', (req, res) => {
    contactController.sendContactEmail(req, res);
});

module.exports = router; 