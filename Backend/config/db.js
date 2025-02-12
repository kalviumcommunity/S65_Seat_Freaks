const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/practice')
        console.log("connected sucessfully")
    }catch(error){
        res.status(500).send(error.message)
    }
}


module.exports=connectDB;


