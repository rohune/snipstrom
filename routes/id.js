var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.get('/:id', function(request, response, next) {
  var longUrl = urldb.getLongUrl(request.params.id);
  
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
