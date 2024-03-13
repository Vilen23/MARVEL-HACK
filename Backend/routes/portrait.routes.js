const express = require('express');
const { getport } = require('../controllers/portrait');
const router = express.Router();

router.get('/getportrait/:key',getport);

module.exports = router;