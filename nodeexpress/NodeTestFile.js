var http=require('http');
var fs=require('fs');

function mufun(req,resp)
{
	fs.readFile("NodeTest.txt",function(err,data)
	{
		resp.write(data);
		resp.end();
	});
  
}

var server=http.createServer(mufun);
server.listen(3000);
console.log("3000");