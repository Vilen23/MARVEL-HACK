const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/Hackathon')

const badgeSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    badge:{
        type:String,
        default:"bronze"
    }
})

const Badge = mongoose.model('Badge',badgeSchema);

module.exports = {Badge};