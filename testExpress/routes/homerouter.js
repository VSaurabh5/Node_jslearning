const express=require('express');

const homerouter=express.Router();
const path=require('path');
const rootdir=require('./utils/pathutil');
const registeredhome=[];
homerouter.get('/',(req,res,next)=>{
    console.log('Handling / for GET',req.url,req.method);
    registeredhome.push({housename: req.body.housename,});
    res.sendFile(path.join(rootdir,'views','home.html'));
});



module.exports=homerouter;
exports.registeredhome=registeredhome;