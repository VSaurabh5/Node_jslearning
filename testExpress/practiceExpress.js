const express=require('express');
const bodyParser=require('body-parser');


const app=express();

app.use((req,res,next)=>{
    console.log(' first middleware 1. is running',req.url,req.method);
    next();
});
//app.use((req,res,next)=>{
 //   console.log(' third middleware 3. is running',req.url,req.method);
  //  res.send('<h1>hello guys</h1>');
///}
app.get('/',(req,res,next)=>{
    console.log('Handling / for GET',req.url,req.method);
    res.send('<h1>hello guys</h1>');
});
  
app.get('/contact',(req,res,next)=>{
    console.log('Handling /contact for GET',req.url,req.method);
    res.send(`<h1>hello  dear give your contact details</h1>
        <form action="/contact" method="POST">
            <input type="text" name="username" placeholder="Username">
            <input type="email" name="email" placeholder="Email">
           <br>
            <button type="submit">Submit</button>
        </form>`);
});
app.post('/contact',(req,res,next)=>{
    console.log('Handling /contact for POST',req.url,req.method,req.body);
    next();
   
});
app.use(bodyParser.urlencoded());

app.post('/contact',(req,res,next)=>{
    console.log('Handling /contact for POST',req.url,req.method,req.body);
    res.send('<h1>Thank you for submitting your contact details</h1>');
});

const PORT=3000;
app.listen(3000,()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
});