const express = require('express');

const userrouter=require('./routes/userrouter').userrouter;

const hostrouter=require('./routes/hostrouter').hostrouter;

const app = express();

app.use((req,res,next)=>{
    console.log('req.url',req.method);
    next();
});
app.use(express.urlencoded());
app.use(userrouter);
app.use(hostrouter);


app.listen(3000,()=>{
    console.log('Server is running on location http://localhost:3000');
})