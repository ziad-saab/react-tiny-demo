var React = require('react');

var Selection = React.createClass({
  getInitialState: function() {
    return {
      selectedElements: []
    }
  },
  handleSelection: function(ev) {
    var box = ev.target;
    
    var isChecked = box.checked;
    var value = box.value;
    
    if (isChecked) {
      
      if (this.state.selectedElements.length === 2) {
        return;
      }
      
      this.setState({
        selectedElements: this.state.selectedElements.concat(value)
      });
    }
    else {
      var index = this.state.selectedElements.indexOf(value);
      
      var oldState = this.state.selectedElements;
      var newState = oldState.slice(0, index).concat(oldState.slice(index + 1));
      
      this.setState({
        selectedElements: newState
      })
    }
  },
  render: function() {
    
    var options = this.state.selectedElements;
    
    return (
      <div>
        <p>You checked {this.state.selectedElements.length} boxes</p>
        <ul>
          <li>option #1 <input checked={options.indexOf('option_1') > -1} onChange={this.handleSelection} type="checkbox" name="selection" value="option_1"/></li>
          <li>option #2 <input checked={options.indexOf('option_2') > -1} onChange={this.handleSelection} type="checkbox" name="selection" value="option_2"/></li>
          <li>option #3 <input checked={options.indexOf('option_3') > -1} onChange={this.handleSelection} type="checkbox" name="selection" value="option_3"/></li>
          <li>option #4 <input checked={options.indexOf('option_4') > -1} onChange={this.handleSelection} type="checkbox" name="selection" value="option_4"/></li>
        </ul>
      </div>
    )
  }
});

module.exports = Selection;