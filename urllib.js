let url = require('url');
let address = 'http://localhost:8085/home/index.html?brand=toyota&color=white&unit=vios';
let sep = url.parse(address, true);
console.log(sep.host); 
console.log(sep.query.brand) 