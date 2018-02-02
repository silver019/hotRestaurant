var express = require('express');
var app = express();
var path    = require("path");



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));

});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname+'/index2.html'));

});
app.get('/tables', function (req, res) {
  res.sendFile(path.join(__dirname+'/index3.html'));

});

app.get('/reserved', function (req, res) {
  res.sendFile(path.join(__dirname+'/index4.html'));

});


app.get('/test', (req, res) => {
  res.send('Hello test');
});
 
app.listen(3000, () => console.log('Example app listening on port 3000!'));