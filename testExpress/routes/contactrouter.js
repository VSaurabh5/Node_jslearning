const path=require('path');
const rootdir=require('./utils/pathutil');
const express=require('express');

const contactrouter=express.Router();

contactrouter.get('/contact',(req,res,next)=>{
    console.log('Handling /contact for GET',req.url,req.method);
    res.sendFile(path.join(rootdir,'views','contactus.html'));
});
contactrouter.post('/contact',(req,res,next)=>{
    console.log('Handling /contact for POST',req.url,req.method,req.body);
    res.sendFile(path.join(rootdir,'views','contactsuccess.html'));
});   
module.exports=contactrouter;