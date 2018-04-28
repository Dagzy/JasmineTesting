var express = require('express')
var app = express();
var BASE_URL = 'https://www.google.com/'
// console.log(app.get())
var value = app.get(BASE_URL)

console.log(`The value is ${value}`);