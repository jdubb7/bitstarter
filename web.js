var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer("utf-8");
  var fs = require('fs');
  response.send(fs.readFileSync("index.html"), function (err, buffer));
  if (err) throw err;
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
