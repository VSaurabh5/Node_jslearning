const http=require('http');
const handler=require('./handler');
const server=http.createServer(handler.requestHandler);
const PORT=3001
server.listen(PORT,()=>{
    console.log(`server is running on address http://localhost:${PORT}`);
});