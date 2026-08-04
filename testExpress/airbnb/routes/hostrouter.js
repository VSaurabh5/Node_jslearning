const express = require('express');
const hostrouter = express.Router();

hostrouter.get('/host/add-home', (req, res, next) => {
    res.send(`<html>
    <head><title>Add Home</title></head>
    <body>
        <h1>Add New Home</h1>
        <form action="/host/add-home" method="POST">
            <label for="name">Home Name:</label>
            <input type="text" id="name" name="name" required>
            <br><br>
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
            <br><br>
            <label for="price">Price per Night:</label>
            <input type="number" id="price" name="price" step="0.01" required>
            <br><br>
            <button type="submit">Add Home</button>
        </form>
    </body>
</html>`);
});

hostrouter.post('/host/add-home', (req, res, next) => {
    console.log(req.body);
    res.send(`<html>
    <head><title>Home Added</title></head> 
    <body>
        <h1>Home Added Successfully</h1>
        <a href="/host/add-home">Add Another Home</a>
    </body>
</html>`);
});

exports.hostrouter = hostrouter;