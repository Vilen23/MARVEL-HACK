const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({error: "Unauthorized"});
    }
    jwt.verify(token,process.env.JWT_SECRET,(error,user)=>{
        if(error){

            return res.status(401).json({error: "Unauthorized"});
        }
        req.user = user;
        next()
    })
}

module.exports = { verifyToken }