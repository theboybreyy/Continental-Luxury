const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url == '/') {
    //     fs.readFile(path.join(__dirname, 'Public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);

    //     })
    // }
    // if (req.url == '/api/users') {
    //     const users = [
    //         { name: 'John Doe', age: 32 },
    //         { name: 'Kylian Gerrit', age: 42 },
    //         { name: 'Gilbert Xavier', age: 23 }
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }


    // Build File Path
    let filePath = path.join(__dirname, 'Public', req.url === '/' ? 'index.html' : req.url);
   
    // Extension of File
    let extname = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // Check Ext and Set Content Type
    


})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port ' + PORT));
