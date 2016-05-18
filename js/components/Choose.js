var React = require('react');

var data = require('../data');

var Choose = React.createClass({
  render: function() {
    
    console.log(data.getData('info'));
    
    return <h1>choose</h1>;
  }
});

module.exports = Choose;