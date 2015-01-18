var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.get('/:id', function(request, response, next) {
  var longUrl = urldb.getLongUrl(request.params.id);
  
  response.redirect(longUrl);
});

module.exports = router;
