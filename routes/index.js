var express = require('express');
var router = express.Router();

var config = require('../app/config');
var urldb = require('../app/urldb');
var snip = require('../app/snip');

router.get('/', function(req, res, next) {
  var title = "snipstrom -- url shortener";
  var urls = urldb.urls;
  
  res.render('index', { title: title, rootUrl: config.rootUrl, urls: urls });
});

router.get('/:id', function(request, response, next) {
  var longUrl = snip.getLongUrl(request.params.id);
  
  if (longUrl) {
      response
        .redirect(301, longUrl);  
  } else {
      response
        .status(404)
        .send('url not found');
  }
});

module.exports = router;
