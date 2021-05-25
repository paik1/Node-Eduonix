const bcrypt = require('bcrypt');

let password = "This is my secret password";
let password2 = "This is my second secret password";
let hash = bcrypt.hashSync(password, 10);

console.log(password);
console.log(hash);

bcrypt.compare(password, hash, function(err, res){
    console.log(res);
});

