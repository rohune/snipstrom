var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
  if (request.query.text) {
    response.send(request.query.text);
  } else {
    response.send('empty string!'); 
  }
});

module.exports = router;