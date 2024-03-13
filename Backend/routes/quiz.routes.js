const express = require('express');
const router =  express.Router();
const {quizscoreee} = require('../controllers/quiz.js');

router.post('/submit',quizscoreee);

module.exports = router;