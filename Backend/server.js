const express=require('express');

const app=express();


const PORT=3000;

const connectDB=require('./config/db');

app.use(express.json())

app.get('/ping', async (req,res)=>{
    try{
        res.send('Ping is Working Fine...');
    }catch(error){
        res.status(500).send('Internal Server error')}
});

app.listen(PORT, async  ()=>{
    try{
        await connectDB()
        console.log(`Server is running on port ${PORT}`);
    }catch(error){
        console.log('Server error',error)
        res.status(500).send('Internal Server Error');
    }
});





