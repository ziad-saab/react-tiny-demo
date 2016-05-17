var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var App = require('./components/App');
var HomePage = require('./components/HomePage');
var Search = require('./components/Search');


var router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="search" component={Search} />
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));