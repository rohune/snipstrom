var express = require('express');
var router = express.Router();

var snip = require('../app/snip');

router.get('/:id', function(request, response, next) {
  var longUrl = snip.getLongUrl(request.params.id);
  
  if (longUrl) {
      response
        .redirect(301, longUrl);  
  } else {
      response
        .status(404)
        .send('not found');
  }
});

module.exports = router;
