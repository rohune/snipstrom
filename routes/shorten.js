var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.post('/', function(request, response, next) {
  var urls = urldb.getUrls();
  var newId = urldb.generateId(6);
  
  // generate default url for attaching ids to (if not behind reverse proxy)
  // var rootUrl = request.protocol + '://' + request.get('host') + '/id/';
  var rootUrl = 'http://snip.yliseppo.com/id/';
  
  var newUrl = request.body.url;
  
  if (urldb.validate(newUrl)) {
      urls.push({ id: newId, url: newUrl });
    
      response
        .set('Content-Type', 'text/plain')
        .send(rootUrl + newId);
  } else {
      response
        .set('Content-Type', 'text/plain')
        .send('invalid url!');
  }
  
});

module.exports = router;
