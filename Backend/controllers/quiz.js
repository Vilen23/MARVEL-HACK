const { Badge } = require('../models/badges.js');
const quiz = require('../models/quiz.model.js');
const  questions  = require('../models/quizques.js');
const User = require('../models/user.model.js');
const quizscoreee = async(req,res)=>{
    const {score, userId} = req.body;
    try {
        const isUser = await quiz.findOne({
            userId
        });
        if(isUser){
            const updateScore = await quiz.findByIdAndUpdate({
                _id: isUser._id
            },{
                score
            });
            if (score>4 && score<6){
                const badgeUpdate = await User.findByIdAndUpdate({
                    _id: userId
                },{
                    badge: "Silver"
                });
            }
            if(score>6 && score<8){
                const badgeUpdate = await User.findByIdAndUpdate({
                    _id: userId
                },{
                    badge: "Gold"
                });
            }
            if(score>8){
                
                const badgeupdate = await Badge.findOneAndUpdate({
                    userId
                },{
                    badge: "Platinum"
                
                });
                console.log(badgeupdate)
            }
            return res.status(200).json({updateScore});
        }
        const userScore = await quiz.create({
            score,
            userId
        });
        await userScore.save();
        if (score>4 && score<6){
            const badgeUpdate = await User.findByIdAndUpdate({
                _id: userId
            },{
                badge: "Silver"
            });
        }
        if(score>6 && score<8){
            const badgeUpdate = await User.findByIdAndUpdate({
                _id: userId
            },{
                badge: "Gold"
            });
        }
        if(score>8){
            const badgeUpdate = await User.findByIdAndUpdate({
                _id: userId
            },{
                badge: "Platinum"
            });
        }
        return res.status(200).json({userScore});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error"});
    }
}

const getquiz = async (req,res)=>{
    try {
        return res.status(200).json(questions);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error"});
    }
}

module.exports = { quizscoreee , getquiz}