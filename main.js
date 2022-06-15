var http = require('http');
var url = require('url');
var calc = require('./calc');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  let result = calc.soma(parseInt(q.valor1), parseInt(q.valor2));
  res.end(result+" ");
}).listen(8080);


