let EventEmitter = require('events').EventEmitter;

let emitter = new EventEmitter();

let count = 0;

setInterval(function(){
    emitter.emit('counts', count);
    count++;
}, 1000);

emitter.on('counts', function(count){
    console.log('Lets count', count);
});