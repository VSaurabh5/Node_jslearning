const user=(req,res)=>{
    console.log(req.url,req.method);    
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`<html>form action="/create-user" method="POST">
        <head><title>Users</title></head>
        <body>
            <form action="/create-user" method="POST">
                <input type="text" name="username" placeholder="Username">
                <button type="submit">Create User</button>
            </form>
        </body>
        </html>`);
        res.end();
    }else{
        res.setHeader('Content-Type','text/html');
        res.write(`<html>
        <head><title>Users</title></head>
        <body>
            <h1>Invalid URL</h1>
        </body>
        </html>`);
        res.end();
    }
}
exports.user=user;