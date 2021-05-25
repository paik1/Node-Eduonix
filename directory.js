var fs = require('fs');
var dir = "dirname";

// if(fs.existsSync(dir)){
//     console.log("The directory with the name "+dir+" already exists");
// }else{
//     fs.mkdir(dir, function(error){
//         if(error){
//             console.log(error);
//         }else{
//             console.log("Created the directory "+dir+" successfully")
//         }

//     });
// }

fs.rmdir("./"+dir,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Removed the directory successfully");
    }
})