const {Router} = require('express');
const { productUpload } = require('../../multer');
const productrouter = Router();

productrouter.get('/',(req,res)=>{
    res.send('Product Route')
})

productrouter.post('/',productUpload('files'),async (req,res)=>{
    const {name,description,category,tags,price,stock,email}=req.body;
    const images = req.files.map(file => file.path);
    try{
        const seller = await Productmodel.findOne({email:email});
        if (!seller){
            return res.status(400).json({message:'Seller not found'});
        }

        if (images.length===0){
            return res.status(400).json({message:'Images are required'});

        }
        const product = new Productmodel({
            name:name,
            description:description,
            category:category,
            tags:tags,
            price:price,
            stock:stock,
            email:email,
            imgags:images
        });
        res.status(200).json({message:'Product added successfully',product:newproduct});
    }
    catch(error){
        console.error(error);
    }

})

module.exports = productrouter;