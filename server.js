var h = require('http');

h.createServer(function(req, res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('<h1>hello world again</h1>');
}).listen(8585);

console.log('server address is http://127.0.0.1:8585');

