const sumRequestHandler=(req,res)=>{
   console.log("IN SUM REQUEST HANDLER");
   const body=[];
   req.on('data',(chunk)=>{
    body.push(chunk);
   });

 req.on('end',()=>{
    const bodystr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodystr);
    const bodyobj=Object.fromEntries(params);
    const result=Number(bodyobj.num1)+Number(bodyobj.num2);
    res.setHeader('Content-Type','text/html');
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body>
    <h1>Calculator</h1>
    <p>Result: ${result}</p>
    </body>
    </html>`);
    return res.end();

 })
}
exports.sumRequestHandler=sumRequestHandler;