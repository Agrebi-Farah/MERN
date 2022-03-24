const { body, validationResult } = require('express-validator');


exports.validationSignUp = [
    body('Password','the Password must containt at least 5 characters').isEmpty().isLength({min:5}),
    body('Email','the Email must be a correct email format').isEmpty().isEmail(),
    body('Name','the Name must not be empty').isEmpty()
]


exports.validationSignIn = [
    body('Password','the Password must containt at least 5 characters').isEmpty().isLength({min:5}),
    body('Email','the Email must be a correct email format').isEmpty().isEmail()
]



exports.isValid = async (req, res, next) => {
    const errors = validationResult(req.body);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          next();
          
    } catch (error) {
        res.status(400).send({msg:'Error in validating'})
    }
}