var http = require('http');
var fs = require('fs');
var readStream = fs.createReadStream('bhrt.txt');
http.createServer(function(req,res)
{
  //append mode
  fs.appendFile('appendfile.txt','hi vighnesh you created a file append mode',function(err)
  {
    if (err) throw err;
    console.log('Done :-)');
  });

  //open mode - creates a file in open mode with 'w' writing properties
  fs.open('appendfile.txt','w',function(err,file){
    if(err) throw err  ;
    console.log('Done:-)');
  });

  //write mode it overwrites the prev. data
  fs.writeFile('appendfile.txt','hello u replaced the prev. content', function(err){
    if(err) throw err;
    console.log('Done :-)');
  });

  //apppend file continues from where u have left after write mode.
  fs.appendFile('appendfile.txt','hi vighnesh you created a file append mode',function(err)
  {
    if (err) throw err;
    console.log('Done :-)');
  });

  //delete a file
  fs.unlink('file.html',function(err){
    if(err) throw err;
    console.log('done :-)');
  });

  //rename a file
  fs.rename('appendfile.txt','file.txt',function(err){
    if(err) throw err;
    console.log('done :-)');
  });

  //
  readStream.on('open', function ()
  {
    console.log('The file is open');
  });

}).listen(8080);
