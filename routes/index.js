var express = require('express');
var router = express.Router();

var urldb = require('../urldb');

router.get('/', function(req, res, next) {
  var title = "snipstrom -- url shortener";
  var urls = urldb.getUrls();
  
  res.render('index', { title: title, urls: urls });
});

module.exports = router;
