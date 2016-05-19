var React = require('react');
var request = require('superagent');

var Pizza = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.icon}/>
        <span>{this.props.name}</span>
      </div>
    );
  }
})

var Pizzas = React.createClass({
  getInitialState: function() {
    return {
      pizzas: []
    }
  },
  componentDidMount: function() {
    
    var that = this;
    
    this.setState({
      loading: true
    })
    
    request
    .get('/pizzas')
    .end(function(err, result) {
      var pizzas = JSON.parse(result.text);
      
      that.setState({
        pizzas: pizzas,
        loading: false
      })
    })
  },
  renderPizza: function(item) {
    return (
      <li>
        <Pizza name={item.name} icon={item.icon}/>
      </li>
    )
  },
  render: function() {
    return (
      <div>
        {this.state.loading ? <p>Please wait, we are loading...</p> : null}
        <ul>
        {this.state.pizzas.map(this.renderPizza)}
        </ul>
      </div>
    )
  }
})

module.exports = Pizzas;