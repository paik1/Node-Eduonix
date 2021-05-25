const express = require('express');
const app = express();
const fs = require('fs');

const path = require('path');

app.get('/', (req,res)=>{
    res.send("Hello World!");
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname+'/public/home.html'));
});

app.set('view engine', 'pug');
app.get('/main', function(req,res){
    res.render('main', {title: 'hello world', content: 'Welcome to node JS course'});
}); 


app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/listcars', (req, res)=>{
    fs.readFile(__dirname + "/" + "cars.json", "utf8", (error, content)=>{
        if(content){
            console.log(content);
        }else{
            console.log(error);
        }
        res.end(content);
    });
});

var car = {
    "cars5": {
    "id": 5,
    "brand": "honda",
    "color": "green",
    "qty": 45
    }
}

app.get('/addcars', (req, res)=>{
    fs.readFile(__dirname+'/'+"cars.json", "utf8", (error,content)=>{
        data = JSON.parse(content);
        data["cars5"] = car["cars5"];
        if(data){
            console.log(data);
        }else{
            console.log(error);
        }
        res.end(JSON.stringify(data));

    });
});

app.get('/viewcars/:id', (req,res)=>{
    fs.readFile(__dirname+'/'+'cars.json', (err,content)=>{
        if(err){
            console.log(err);
        }
        if(content){
            cars = JSON.parse(content);
            
            var cary = cars["cars"+req.params.id];
            console.log(cary);
            res.end(JSON.stringify(cary));
        }
    });
});

app.listen(8585, ()=>console.log('server address is http://127.0.0.1:8585'));