const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

const auth = async(req,res,next)=>{
    const tokenauth = req.headers.Autherization
    const token = tokenauth.split(' ')[1]


    jwt.verify(token,Secret, function(err, decoded){
        if(err){
            console.log("error in auth middleware",err)
        }
        else{
            next()
        }
    });

}

module.exports=auth

