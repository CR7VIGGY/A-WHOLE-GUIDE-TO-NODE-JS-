var http = require('http');
var dt = require('./date');

http.createServer(function (req, res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("\r\n");
    res.write(req.url);
    res.end('hi vighnesh tiwari');
}).listen(8080);
