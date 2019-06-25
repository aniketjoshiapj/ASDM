var http=require("http")
http.createServer(function(req,resp)
{
	resp.write("Hello World");
	resp.end();
}).listen(2000);