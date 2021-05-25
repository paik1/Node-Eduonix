let fileSystem = require('fs');

fileSystem.readFile('output.txt','utf8', function(error,content){
    if(error){
        console.log(error)
    }else{
        console.log(content)
    }
});