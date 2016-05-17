var React = require('react');
var Link = require('react-router').Link;

var Search = React.createClass({
    render: function() {
        return (
            <div>
                <Link to="/">Go back to homepage</Link>
                <h1>This is the search screen</h1>
                <form>
                    <input type="text"/>
                    <button type="button">Search!</button>
                </form>
            </div>
        );
    }
});

module.exports = Search;