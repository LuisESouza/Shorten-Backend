const express = require('express');
const linkShorten = require('../controller/shortenController');
const router = express.Router();

router.post('/shorten-link', linkShorten);

module.exports = router;
