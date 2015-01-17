var express = require('express');
var app = express();

var respond = function(request, response) {
  if (request.query.url) {
    response.send(request.query.url);
  } else {
    response.send('hello yliseppo!');  
  }
}

app.get('/', function(request, response) {
  response.send('please use /api');
}

app.get('/api', function(request, response) {
  respond(request, response);
});

app.post('/api/shorten', function(request, response) {
  
});

app.listen(3000, function() {
 console.log('yliseppo is listening on 3000...!');
});