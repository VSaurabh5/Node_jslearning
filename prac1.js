const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method);
    res.writeHead(200,{'Content-Type':'text/html'});
    


});
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
