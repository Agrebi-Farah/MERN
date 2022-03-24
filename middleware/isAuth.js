const jwt = require ('jsonwebtoken');
const userSchema = require ('../models/user.models');


exports.isAuth = async (req, res, next) => {
    const token = req.header('authorization');
    try {
       if(!token) {
           return res.status(400).send({msg:'User not authorized'});
       }
       const decoded = jwt.verify(token, process.env.SECRET_OR_KEY);
       
       if(!decoded){
           return res.status(400).send({msg:'User not authorized'})
       }




       const user = await userSchema.findById(decoded.id)
       req.user = user;

        next();
    } catch (error) {
        res.status(400).send({msg:"Error while authentificating."})
    }
}