const comment = require('../models/comment.model.js');

const createComment = async(req,res) => {
    const {userId,comment,postId} = req.body;
    if(!userId || !comment || !postId){
        return res.status(400).json({message: 'All fields are required'});
    }
    try {
        const newComment = new comment({
            userId,
            comment,
            postId
        });
        await newComment.save();
        res.status(200).json({message: 'Comment created successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const getComments = async(req,res) => {
    const {postId} = req.params.postId;
    if(!postId){
        return res.status(400).json({message: 'Post Id is required'});
    }
    try {
        const comments = await comment.find({postId});
        res.status(200).json({comments});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
}


module.exports = { createComment, getComments }