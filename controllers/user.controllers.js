const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const userSchema = require ('../models/user.models');
const categoriesSchema = require ('../models/categories.models');


exports.authSignUp = async (req,res)=>{
    const {Name,Email,Password,Role,Lastname,Confirm_Password,Username} = req.body
    try {
        const find = await userSchema.findOne({Email:Email});
        if(find){
            res.status(400).send({msg:'This email is already used for an existant user.'})
        }
        const user = new userSchema(req.body);
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(Password,salt);
        const userID = {id:user._id};
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
        user.Password = hashedPassword;
        await user.save();
        res.status(200).send({msg:'User registred successfully',token})

    } catch (error) {
     res.status(400).send({msg:'Error while registring'})
    }
}


exports.authSignIn = async (req,res)=>{
    const {Email,Password} = req.body;
    try {
        const find = await userSchema.findOne({Email:Email});
        if(!find) {
              res.status(400).send({msg:'User does not exist'})
        }
        const match = bcrypt.compareSync(Password, find.Password)
        if(!match){
            res.status(400).send({msg:'Bad Credentials.'})
        }
        const userID = {id:find._id};
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
        res.status(200).send({msg:'Logged In Successfully',token})

    } catch (error) {
        res.status(400).send({msg:'Error while signing In'})
    }
}
exports.ShowCategories =  async (req,res)=>{
    try {
       const collectionCategories =  await categoriesSchema.find();
       console.log(collectionCategories)
        res.status(200).send({msg:"categories",collectionCategories});
    } catch (error) {
        res.status(500).send({msg:"could not find categories"})
    }
}
