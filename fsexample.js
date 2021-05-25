let fileSystem = require('fs');

fileSystem.appendFile('output.txt', 'another added text to the output', function(error){
    if(error){
        console.log(error);
    }else{
        console.log('File created successfully');
    }
});