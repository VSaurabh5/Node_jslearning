const express= require('express');

const userrouter=express.Router();

userrouter.get('/',(req,res,next)=>{
    res.send(`<html>
    <head><title>User Home</title></head>
    <body>
        <h1>Welcome to the User Home Page</h1>
        <p>This is a simple user home page.</p>
        <a href="/host/add-home">Add a New Home</a>
    </body>
</html>`);
});


exports.userrouter=userrouter;