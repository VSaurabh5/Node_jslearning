const path=require('path');
const express=require('express');
const userrouter=express.Router();


const rootdir=require('./utils/pathutil');
const registeredhome=require('./homerouter').registeredhome;
userrouter.get('/',(req,res,next)=>{
    consoe.log({regiseredhome});
    res.sendFile(path.join(rootdir,'views','home.html'));
});

module.exports=userrouter;

