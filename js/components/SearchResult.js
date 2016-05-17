var React = require('react');

var SearchResult = React.createClass({
    render: function() {
        return (
            <li>
                <img src={this.props.photo}/>
                <p>{this.props.text}</p>
            </li>
        );
    }
});

module.exports = SearchResult;