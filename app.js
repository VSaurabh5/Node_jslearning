const http=require('http');
const handler=require('./handler');
const server=http.createServer(handler.requestHandler);
server.listen(3000,()=>{
    console.log('server is running on address http://localhost:3000');
});