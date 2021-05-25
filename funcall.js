let greeting = function(a){
    console.log('Hello World ' + a);
}

greeting('Kiran');

let greetingcall = function(callback){
    callback('Abhin');
}

greetingcall(greeting);
