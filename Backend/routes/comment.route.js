const express = require('express');
const router =  express.Router();
const {createComment,getComments,likeComment} = require('../controllers/comment.controller');
const { verifyToken } = require('../middlewares/usercheck');


router.post('/create',verifyToken,createComment);
router.get('/getComments/:postId',getComments);
router.post('/like/:commentId/:userId/:key',verifyToken,likeComment)

module.exports = router;