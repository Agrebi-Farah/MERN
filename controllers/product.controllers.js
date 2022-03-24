const productSchema = require('../models/product.models') ;

exports.AddProduct = async (req,res)=>{
    const {name,img,price,category} = req.body;
    
    try {

       const newProduct = new productSchema(req.body);
       const product = await productSchema.findOne({img})
       if(product){
            return res.status(400).send('already found')
       }
        await newProduct.save();
        res.status(200).send({msg:"added", newProduct });
    } catch (error) {
        
        res.status(500).send({msg:'could not add product'})
    }
}
exports.ShowProduct =  async (req,res)=>{
    try {
       const collectionProduct =  await productSchema.find();
        res.status(200).send({msg:"product",collectionProduct});
    } catch (error) {
        res.status(500).send({msg:"could not product"})
    }
}
exports.ShowProductByID = async (req,res)=>{
    const {id} = req.params
    try {
       const collectionproduct =  await productSchema.findById(id);
        res.status(200).send({msg:'product',collectionproduct});
    } catch (error) {
        res.status(500).send({msg:'could not add product'})
    }
}