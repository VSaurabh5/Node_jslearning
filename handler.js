const requestHandler=(req,res)=>{
 console.log(req.url,req.method);
 if(req.url==='/'){
     res.setHeader('Content-Type','text/html');
     res.write(`<html>
     <head><title>Calculator</title></head>
     <body>
     <h1>Calculator</h1>
     <form action="/calculate" method="POST">
     <input type="text" name="num1" placeholder="Enter first number" required>
     <input type="text" name="num2" placeholder="Enter second number" required>
     <br>
     <button type="submit">Calculate</button>
     </form>
     </body>
     </html>`);
     return res.end();

 }else{
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Calculator</h1>
    <p>Invalid URL</p>
    </body>
    </html>`);
    return res.end();
 }
}
exports.requestHandler=requestHandler;