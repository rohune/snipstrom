var express = require('express');
var app = express();

app.get('/', function(request, response) {
 response.send('hello yliseppo!');
});

app.listen(3000, function() {
 console.log('yliseppo is listening on 3000...!');
});