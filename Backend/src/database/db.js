const {connect}=require('mongoose');

const connectDB=async()=>{
    try{
        await connect(url);
        console.log('Database connected successfully');
    }catch(err){
        console.log(err);
    }
}

module.exports=connectDB;