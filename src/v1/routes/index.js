const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.send(`Connecting from ${req.originalUrl}`);
});

module.exports = router;