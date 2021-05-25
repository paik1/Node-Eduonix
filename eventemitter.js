var events = require('events');
var emitter = new events.EventEmitter;
emitter.on('newEvent', function(brand, color, price){

    console.log(`car brand is ${brand} with the color ${color} whose price is ${price}`);

});

emitter.emit('newEvent', "Toyota", "White", "1,00,000");