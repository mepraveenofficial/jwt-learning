const user = require("../model/user.js");


const userData = async (req, res, next) => {

    try {
        let data = await user.findOne({ _id : req.userid});

        res.send(data)
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userData
    
};