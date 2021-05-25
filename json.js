var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'application/json'});

    var cars = {
        "brand": "toyota",
        "color": "white",
        "qty": 10,
    }

    res.end(JSON.stringify(cars));
}).listen(8585);

console.log('server address is http://127.0.0.1:8585');