var urls = [];

exports.generateId = function(length) {
  var id = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++) {
    id += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return id;
}

exports.getLongUrl = function(id) {
  for (var i = 0, len = urls.length; i < len; i++) {
    if (urls[i].id === id) {
      return urls[i].url;
    }
  }
  
  return 'not found';
}

exports.getUrls = function() { return urls; }