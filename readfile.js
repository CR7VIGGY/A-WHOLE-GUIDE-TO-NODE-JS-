var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
  fs.readFile('file.html',function(err,data)
  {
    if (err) throw err;
    console.log('Saved!');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
  });

}).listen(8080);
