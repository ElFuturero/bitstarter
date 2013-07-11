var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var indexPage = "index.html";
var bufferIndex = fs.readFileSync(indexPage);
var message = buf.toString(bufferIndex, 'utf8');

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
