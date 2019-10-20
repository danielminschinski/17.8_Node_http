var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	
	if(request.method === 'GET' && request.url === '/hello'){
		response.setHeader("Content-Type", "text/html; charset=utf-8");
		
		fs.readFile('./index.html', 'utf-8', function(err, text){
			response.write(text);
			response.end();
		});
	}else {
			response.setHeader("Content-Type", "image/jpeg");
			response.statusCode = 404;
			fs.readFile('./blad-404.jpg', function(err, data){
				response.write(data);
				response.end();
			});
		}			
});

	
server.listen(9000);



/*
var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html, charset=utf-8');
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello Wold!</h1>');
        response.end();
    } else {
        response.statusCode = 404;
        response.write('<h1>404: wrong path!</h1>');
        response.end();
    }
});
server.listen(9000);
*/