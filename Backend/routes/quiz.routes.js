const express = require('express');
const router =  express.Router();
const {quizscoreee} = require('../controllers/quiz.js');

router.post('/quiz/submit',quizscoreee);

module.exports = router;