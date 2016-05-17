var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var SearchResult = require('./SearchResult');

var searchResults = [
    {
        id: 100,
        text: 'lorem ispum',
        photo: 'http://placekitten.com/g/100'
    },
    {
        id: 151,
        text: 'hello world',
        photo: 'http://placekitten.com/g/101'
    },
    {
        id: 160,
        text: 'lorem ispum',
        photo: 'http://placekitten.com/g/105'
    },
    
];

var HomePage = React.createClass({
    render: function() {
        
        var lis = searchResults.map(function(result) {
            return (
                <SearchResult photo={result.photo} text={result.text}/>
            );
        });
        
        return (
            <div>
                <h1>this is the homepage</h1>
                
                <ul className="results">
                    {lis}
                </ul>
            </div>
        );
    }
});

module.exports = HomePage;