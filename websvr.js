var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World My name is Debleena Chatterjee');
    res.end();
}).listen(8001);
console.log('Server running at http://localhost:8001/');