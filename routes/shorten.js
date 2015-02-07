var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.post('/', function(request, response, next) {  
  var url = request.body.link;
  var shortened = urldb.shorten(url);
  
  if (shortened) {
      response
        .set('Content-Type', 'text/plain')
        .send(shortened);
  } else {
      response
        .set('Content-Type', 'text/plain')
        .send('invalid url or parameter name: use \'link\'');
  }  
});

module.exports = router;
