var http=require('http');

var server=http.createServer(function(req,res){
    res.write('hello world');
    res.end();
}).listen(8000);

server.on('error', function (e) {
    // Handle your error here
    console.log(e);
  });
