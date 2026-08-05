const express=require('express');

const homerouter=express.Router();
const path=require('path');
const rootdir=require('./utils/pathutil');

homerouter.get('/',(req,res,next)=>{
    console.log('Handling / for GET',req.url,req.method);
    res.sendFile(path.join(rootdir,'views','home.html'));
});



module.exports=homerouter;