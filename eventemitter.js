var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();



http.createServer(function(req,res)
{
  res.writeHead(200,{'Content-Type':'text/html'});
  var myEventHandler = function ()
  {
    console.log('I hear a scream!');
  }

  eventEmitter.on('', myEventHandler);

  //Fire the 'scream' event:
  eventEmitter.emit('');
}).listen(8080);
