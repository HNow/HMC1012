const { request } = require('express');
var express = require('express');
var app = express();


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);


    var jsontext = JSON.stringify({
    'key':false    
        
    });
res.send(jsontext);

  }).listen(3000);

console.log("Server running");

