const express = require('express');
const router =  express.Router();
const {quizscoreee, getquiz} = require('../controllers/quiz.js');
const { verifyToken } = require('../middlewares/usercheck.js');

router.post('/submit',quizscoreee);
router.get('/quizquestion',verifyToken,getquiz);

module.exports = router;