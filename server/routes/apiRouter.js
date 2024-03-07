const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(400).send('Api not set up yet');
})

module.exports = router;