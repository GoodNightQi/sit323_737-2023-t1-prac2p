var http = require('http');
var fs = require("fs");//read html
http.createServer(function (request, response) {

    // sent HTTP 
    // HTTP value: 200 : OK
    // content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // request is a request from client，response is server give response
    //return data
fs.readFile(__dirname + "/login.html", "utf-8", function (error, data){
if(error)
    response.end("read html file error.");
else
    response.end(data.toString());
});
}).listen(8888);
    // Terminal print these information
console.log('Server running at http://127.0.0.1:8888/');