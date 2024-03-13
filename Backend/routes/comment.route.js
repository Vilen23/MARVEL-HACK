const express = require('express');
const router =  express.Router();
const {createComment,getComments} = require('../controllers/comment.controller');


router.post('/create',verifyToken,createComment);
router.get('/getComments/:postId',getComments)

module.exports = router;