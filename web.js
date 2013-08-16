var fs = require('fs');
var express = require('express');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(htmlfile,'utf8'));
});

//var k = fs.readFileSync('./index.html','utf8');

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
