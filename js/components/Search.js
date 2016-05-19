var React = require('react');
var Link = require('react-router').Link;

var data = require('../data');

var Search = React.createClass({
    getInitialState: function() {
        
        var info = data.getData('info') || {};
        
        return {
            firstName: info.firstName || '',
            lastName: info.lastName || ''
        };
    },
    handleChange: function(fieldThatChanged, ev) {
        console.log(fieldThatChanged, ev.target.value)
        var newState = {};
        
        newState[fieldThatChanged] = ev.target.value;
        
        this.setState(newState);
        
        // this is the es6 way thanks to object literal improvements
        // this.setState({
        //     [fieldThatChanged]: ev.target.value
        // })
    },
    continueOrder: function() {
        data.setData('info', this.state);
        
        // this way of programmatically navigating is deprecated. it still works in the current react-router version but will become unavailable soon
        this.props.history.push('/choose');
    },
    render: function() {
        
        var disabled = this.state.firstName.length === 0 || this.state.lastName.length === 0;
        
        var that = this;
        
        return (
            <div>
                <Link to="/">Go back to homepage</Link>
                <h1>This is the ordering screen</h1>
                <form>
                    <div>
                        <label>first name</label>
                        <input onChange={ function(ev) {that.handleChange('firstName', ev); } } type="text"/>
                    </div>
                    <div>
                        <label>last name</label>
                        <input value={this.state.lastName} onChange={ function(ev) { that.handleChange('lastName', ev); } } type="text"/>
                    </div>
                    
                    <button onClick={this.continueOrder} type="button" disabled={disabled}>Continue order</button>
                    
                </form>
            </div>
        );
    }
});

module.exports = Search;