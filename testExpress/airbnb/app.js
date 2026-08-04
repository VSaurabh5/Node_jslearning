const express = require('express');

const userrouter=require('./routes/userrouter').userrouter;
const app = express();

app.use((req,res,next)=>{
    console.log('req.url',req.method);
    next();
});
app.use(express.urlencoded());
app.use(userrouter);

app.get('/',(req,res,next)=>{
   
    res.send(`<html>
    <head><title>Home</title></head>
    <body>
        <h1>Welcome to the Home Page</h1>
        <a href="/add-home">Add Home</a>
    </body>
    </html>`);
});
app.get('/add-home',(req,res,next)=>{
    res.send(`<html>
    <head><title>Add Home</title></head>
    <body>
        <h1>Add a New Home</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="housename" placeholder="Title">

            <br>
            <button type="submit">Add Home</button>
        </form>
    </body>
    </html>`);
});
app.post('/add-home',(req,res,next)=>{
    console.log(req.body);
    res.send(`<html>
    <head><title>Home Added</title></head>
    <body>
        <h1>Home Added Successfully</h1>
        <a href="/">Back to Home</a>
    </body>
    </html>`);
});

app.listen(3000,()=>{
    console.log('Server is running on location http://localhost:3000');
})