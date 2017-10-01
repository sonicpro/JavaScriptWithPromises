var http = require('http');
http.get('http://www.google.com', function (err, res) {
    console.log('got a response');
});
console.log('I am the last line of the script');
