var zlib = require('zlib');
var fs = require('fs');
var zip = zlib.createGzip();
var file = fs.createReadStream('output.txt');
var zipfile = fs.createWriteStream('output.zip');
file.pipe(zip).pipe(zipfile)


setTimeout(function(){
    var unzip = zlib.createUnzip();
    var zipFile2 = fs.createReadStream('output.zip');
    var output = fs.createWriteStream('outputmain.txt');
    zipFile2.pipe(unzip).pipe(output);
}, 3000);