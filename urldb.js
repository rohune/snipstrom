var validator = require('validator');
var _ = require('lodash');

var urls = [];

exports.validate = function(url) {
  return validator.isURL(url);
}

exports.generateId = function(length) {
  var id = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  
  var urlIds = _.map(urls, 'id');
  console.log("urlids: " + urlIds);
  console.log("includes: " + _.includes(urlIds, id));
  return id;
}

exports.addUrl = function(url) {
  
  
  return false;
}

exports.getLongUrl = function(id) {
  for (var i = 0, len = urls.length; i < len; i++) {
    if (urls[i].id === id) {
      return urls[i].url;
    }
  }
  
  return null;
}

exports.getUrls = function() { return urls; }