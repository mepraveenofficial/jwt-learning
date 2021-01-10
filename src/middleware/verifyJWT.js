
const jwt = require("jsonwebtoken")
const { config } = require('dotenv')
config();

function verifyToken(req, res, next){
    let authHeader = req.headers.authorization
    if(authHeader == undefined){
        res.status(401).send({error : "no token provided"})
    }

    else{
    let token = authHeader.split(" ").pop()
    let key = process.env.DB_tokenSecret;
    jwt.verify(token, key, function(err,decoded){
        if(err){
            res.status(500).send({error: "authentication failed"})
        }
        else{
            req.userid = decoded.id
            next();
        }
    
    })
}
}

module.exports = {
    verifyToken
}