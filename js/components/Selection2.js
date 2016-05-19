var React = require('react');
var CheckboxGroup = require('react-checkbox-group');

var event = require('../events');

var Selection = React.createClass({
  getInitialState: function() {
    return {
      selectedElements: []
    }
  },
  selectionChanged: function(newSelection) {
    if (newSelection.length <= 2) {
      this.setState({
        selectedElements: newSelection
      });
    }
    else {
      event.emit('show_message', {message:"YOU TRIED TO CHOOSE TOO MANY BOXES!", duration: 2000});
    }
  },
  render: function() {
    return (
      <div>
        <p>You checked {this.state.selectedElements.length} boxes</p>
        <CheckboxGroup name="selection" onChange={this.selectionChanged} value={this.state.selectedElements}>
        {
          function(Checkbox) {
            return (
              <ul>
                <li>Option #1<Checkbox value="option_1"/></li>
                <li>Option #2<Checkbox value="option_2"/></li>
                <li>Option #3<Checkbox value="option_3"/></li>
                <li>Option #4<Checkbox value="option_4"/></li>
              </ul>
            )
          }
        }
        </CheckboxGroup>
      </div>
    )
  }
});

module.exports = Selection;