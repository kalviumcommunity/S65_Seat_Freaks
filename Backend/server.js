const express=require('express');

const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
    try{
        res.send('Hello World');
    }catch(error){
        res.status(500).send('Internal Server error')}
});

app.listen(PORT,()=>{
    try{
        console.log(`Server is running on port ${PORT}`);
    }catch(error){
        console.log('Server error',error)
        res.status(500).send('Internal Server Error');
    }
});



