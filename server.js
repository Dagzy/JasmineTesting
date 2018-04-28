var express = require('express')
var app = express();
var router = require('express').Router();
// app.use();
// app.get('/', (req, res)=>res.send("Hello, World"))
app.get('/test', function(req, res){
    var jsonObject = {
        "message": "Yeaaaah",
        "day":"TODAY!!!"
    }
    var message = JSON.stringify(jsonObject)
    res.send(message)
})
//app.all method example below. Generally seems like an undesirable method to use for security purposes
// app.all('/404',(req, res)=>res.send('404, File Not Found'));
app.listen('3000', function(req, res){console.log('Listening for HTTP requests on port 3000')})