var validator = require('validator');
var _ = require('lodash');
var config = require('./config');

var rootUrl = config.rootUrl;
var randomLength = config.randomLength;
var validChars = config.validChars;

var urls = [];

// generate default url for attaching ids to (if not behind reverse proxy)
// var rootUrl = request.protocol + '://' + request.get('host') + '/id/';

exports.shorten = function(url) {
  if (validator.isURL(url)) {
    var newId = generateId(randomLength);
    
    urls.push({ id: newId, url: url });    
    return rootUrl + newId;
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
  var id = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    id += validChars.charAt(Math.floor(Math.random() * letters.length));
  }
  
  return id;
}