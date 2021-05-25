var fs = require('fs');

var filename = process.argv[2];

fs.watch(filename, function(){
    console.log("Changes are made to ", filename);
});

console.log(`Watching ${filename}`);