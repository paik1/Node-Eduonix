var ubuf = new Buffer.alloc(15);
console.log(ubuf);

var abuf = new Buffer([2, 14, 89, 54]);
console.log(abuf);

var buffer = new Buffer('this is a node buffer', 'utf-8');
console.log(buffer);

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf-8');
console.log(decoder.write(buffer)); 