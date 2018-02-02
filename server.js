var express = require('express');
var app = express();
var path = require("path");



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));

});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname+'/tables.html'));

});
app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname+'/reserve.html'));


});

app.get('/script', function (req, res) {
  res.sendFile(path.join(__dirname+'/script.js'));
  

});


app.listen(3000, () => console.log('Example app listening on port 3000!'));