const express = require('express');
const router = express.Router();

// Example user route
router.get('/', (req, res) => {
  res.json({ users: ['John', 'Jane', 'Bob'] });
});

module.exports = router;