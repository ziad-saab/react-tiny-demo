var express = require('express');

var app = express();

app.listen(process.env.PORT);

app.use(express.static('./'));


app.get('/pizzas', function(req, res) {

  setTimeout(function() {

    res.json([{
      name: 'pep',
      icon: 'http://placekitten.com/g/40'
    }, {
      name: 'veg',
      icon: 'http://placekitten.com/g/40'
    }, {
      name: 'diet',
      icon: 'http://placekitten.com/g/40'
    }])

  }, 5000);
})


app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});