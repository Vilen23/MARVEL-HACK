const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/Hackathon')

const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User Id is required']
    },
    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    postId: {
        type: String,
        required: [true, 'Post Id is required']
    },
    likes: {
        type: Array,
        default: []
    },
    numberoflikes: {
        type: Number,
        default: 0
    }
},{timestamps: true})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;