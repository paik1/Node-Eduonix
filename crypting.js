let crypto = require('crypto');
let algorithm = 'bf-cbc';
let secretKey = "This is my password";
let cipher = crypto.createCipher(algorithm, secretKey);

let encrypt = cipher.update('hello world', 'utf-8', 'hex');

encrypt += cipher.final('hex');

console.log(encrypt)


let decipher = crypto.createDecipher(algorithm, secretKey);

let decrypted = decipher.update(encrypt, 'hex', 'utf-8');

decrypted += decipher.final('utf-8');

console.log(decrypted);