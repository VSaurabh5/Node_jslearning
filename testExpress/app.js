const http=require('http');
const user=require('./user');
const express=require('express');

const app=express();
app.use('/',(req,res,next)=>{
    console.log("came in 1st",req.url,req.method);
    res.send("<p>under middleware 1</p>");
    next();
});
app.use('/submit',(req,res,next)=>{
    console.log(req.url,req.method);
    res.send("under middleware 2");
    next();
});

const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
});