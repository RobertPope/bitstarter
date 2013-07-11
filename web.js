var express = require('express');
var content = fs.readFileSync("index.html");
var buffer = new Buffer(content);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('index.html');
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
