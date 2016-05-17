var express = require('express');

var app = express();

app.listen(process.env.PORT);

app.use(express.static('./'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});