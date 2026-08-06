const express=require('express');
const bodyParser=require('body-parser');
const homerouter=require('./routes/homerouter');

const contactrouter=require('./routes/contactrouter');  

const app=express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(homerouter);
app.use(contactrouter);



const PORT=3000;
app.listen(3000,()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
});