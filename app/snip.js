var validator = require('validator');
var urldb = require('./urldb');
var config = require('./config');

var rootUrl = config.rootUrl;
var randomLength = config.randomLength;
var validChars = config.validChars;

var urls = urldb.urls;

// generate root url for attaching ids to (if not behind reverse proxy)
// var rootUrl = request.protocol + '://' + request.get('host') + '/';

exports.shorten = function(url) {
  if (validator.isURL(url)) {
    // id has random char portion + incremental value 
    var newId = generateId(randomLength) + addIncrement();
    
    urls.push({ id: newId, url: url });    
    return rootUrl + '/' + newId;
  } 
  
  return null;
}

exports.getLongUrl = function(id) {
  for (var i = 0, len = urls.length; i < len; i++) {
    if (urls[i].id === id) {
      return urls[i].url;
    }
  }
  
  return null;
}

var generateId = function(length) {
  var id = '';

  for (var i = 0; i < length; i++) {
    id += validChars.charAt(Math.floor(Math.random() * validChars.length));
  }
  
  return id;
}

var addIncrement = function() {
  return urls.length.toString(8);
}