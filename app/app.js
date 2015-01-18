var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var parseUrlencoded = bodyParser.urlencoded({extended: false});
var shortUrls = [];

var generateId = function(length) {
  var id = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return id;
}

var getUrl = function(id) {
  for (var i = 0, len = shortUrls.length; i < len; i++) {
    console.log(shortUrls[i].id + ' ' + id);
    
    if (shortUrls[i].id === id) {
      return shortUrls[i].url;
    }
  }
  return 'not found';
}

app.get('/', function(request, response) {
  response.send('nothing here, cya');
});

app.get('/echo', function(request, response) {
  if (request.query.url) {
    response.send(request.query.url);
  } else {
    response.send('hello yliseppo!');  
});

app.get('/id/:id', function(request, response) {
  response.send('url: ' + getUrl(request.params.id));
});

app.post('/shorten', parseUrlencoded, function(request, response) { 
  var newId = generateId(6);
  var newUrl = { id: newId, url: request.body.url };
  
  console.log(newUrl.id + ' ' + newUrl.url);
  shortUrls.push(newUrl);
  response.status(201).json(newUrl);
});

app.listen(3000, function() {
 console.log('yliseppo is listening on 3000...!');
});

// check if valid url
// check for duplicate id when generated?
// check for existing urls
// check for content type?