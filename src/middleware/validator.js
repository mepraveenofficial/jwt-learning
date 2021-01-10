const { body, validationResult } = require('express-validator');
const user = require('../model/user');


const validator = () => { 
    return[
    body('username').isEmail(),
    body('password').isLength({ min: 5 })
    
    ]
}

const validationRequest = (req, res, next) => {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        return next()
        console.log
}

module.exports = {
    validator,
    validationRequest
    
};
