var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.post('/', function(request, response, next) {
  var urls = urldb.getUrls();
  var newId = urldb.generateId(6);
  var newUrl = request.body.url;
  
  if (urldb.validate(newUrl)) {
      urls.push({ id: newId, url: newUrl });
    
      response
        .set('Content-Type', 'text/plain')
        .send('http://localhost:3000/id/' + newId);
  } else {
      response
        .set('Content-Type', 'text/plain')
        .send('invalid url!');
  }
  
});

module.exports = router;
