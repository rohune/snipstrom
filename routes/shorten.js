var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.post('/', function(request, response, next) {
  var urls = urldb.getUrls();
  var newId = urldb.generateId(6);
  var newUrl = request.body.url;
  
  urls.push({ id: newId, url: newUrl });
  
  response
    .set('Content-Type', 'text/plain')
    .send('http://localhost:3000/id/' + newId)
});

module.exports = router;
