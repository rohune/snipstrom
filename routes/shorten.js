var express = require('express');
var router = express.Router();

var snip = require('../app/snip');

router.post('/', function(request, response, next) {  
  var url = request.body.link;
  var shortened = snip.shorten(url);
  
  if (shortened) {
      response
        .set('Content-Type', 'text/plain')
        .send(shortened);
  } else {
      response
        .set('Content-Type', 'text/plain')
        .send('invalid url or parameter name: use \'link=url\'');
  }  
});

module.exports = router;
