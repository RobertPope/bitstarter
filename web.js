var express = require('express');
var fs = require('fs');
var content_buffer = fs.readFileSync("index.html");
var webpage = content_buffer.toString('utf-8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(webpage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
