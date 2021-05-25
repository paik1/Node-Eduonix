var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    var url = req.url;

    switch(url){
        case '/':
            files(res, 'text/html', 'home.html');
            break;

        case '/add':
            files(res, 'text/html', 'add.html');
            break;

        case '/group':
            files(res, 'text/html', 'group.html');
            break;

        default:
            res.writeHead(400, {'Content-type': 'text/html'});
            res.end('no page has been found');
        
    }
}).listen(8585);


var files = function(res, contentType, filePath){
    fs.readFile(filePath, function(err, content){
        if(err){
            res.writeHead({'Content-type': 'text/plains'});
            res.end('error');
        }
        if(content){
            res.writeHead(200, {'Content-type': contentType});
            res.end(content);
        }
    });
};

console.log('server address is http://127.0.0.1:8585')