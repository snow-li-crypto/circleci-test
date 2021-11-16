const http = require('http');http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();}).listen(8080, '127.0.0.1');