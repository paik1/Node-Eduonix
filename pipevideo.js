var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'video/mp4'});

    var rs = fs.createReadStream('Cart.mp4');

    rs.pipe(res);
}).listen(8282);

console.log('server address is http://127.0.0.1:8282');