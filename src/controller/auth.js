const jwt = require("jsonwebtoken")
const user = require("../model/user.js");
const { config } = require('dotenv')
config();

const loginAuth = async (req, res, next) => {

    try {
        let key = process.env.DB_tokenSecret;
        let data = await user.findOne({ username: `${req.body.username}` , password: `${req.body.password}`});
        if(!data){
            res.send("no user exist");
        }
        else{
            
            let response = {
                id: data.id,
                display_name: data.username
            }

            const token = jwt.sign(response, key, { expiresIn: 86400 }); 
            req.cookies.jwtToken = token
            res.send(token)
            
        }
    } catch (error) {
        next(error)
    }
}


const signupAuth = async (req, res, next)=>{
    try {
        
        
        
        let data = await user.create({ username: req.body.username, password: req.body.password,});
        res.send(data)
        

    } catch (error) {
        next(error)
    }
}

module.exports = {
    loginAuth : loginAuth,
    signupAuth : signupAuth
    
};
