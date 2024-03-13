const Comment = require('../models/comment.model.js');

const createComment = async(req,res) => {
    const {userId,comment,postId} = req.body;
    if(!userId || !comment || !postId){
        return res.status(400).json({message: 'All fields are required'});
    }
    try {
        const newComment = new Comment({
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
    const {postId} = req.params;
    if(!postId){
        return res.status(400).json({message: 'Post Id is required'});
    }
    try {
        const comments = await Comment.find({postId}).sort({'createdAt': -1}); // sort comments in descending order of creation time
        res.status(200).json({comments});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

const likeComment = async(req,res)=>{
    const {commentId,userId,key} = req.params;
    try {
        const comment = await Comment.findById(commentId);
        if(!comment){
            return res.status(400).json({message: 'Invalid comment'});
        }
        if(key === 'like'){
            if(comment.likes.includes(userId)){
            console.log("oh yes")
            comment.numberoflikes = comment.numberoflikes - 1;
            comment.likes = comment.likes.filter((id) => id !== userId);
            } else {
            comment.likes.push(userId);
            comment.numberoflikes = comment.numberoflikes + 1;
            }
        }
        await comment.save();
        return res.status(200).json({message: 'Comment liked successfully'});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = { createComment, getComments , likeComment }