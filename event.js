//events in node js
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res)
{
  var rs = fs.createReadStream('bhrt.txt');
  rs.on('open',function()
  {
    console.log('file open');
  });
}).listen(8080);
