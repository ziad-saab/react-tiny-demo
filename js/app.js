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
var Choose = require('./components/Choose');
var Selection = require('./components/Selection');
var Selection2 = require('./components/Selection2');
var Pizzas = require('./components/Pizzas');

var router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="search" component={Search} />
            <Route path="choose" component={Choose} />
            <Route path="sel" component={Selection}/>
            <Route path="sel2" component={Selection2}/>
            <Route path="pizz" component={Pizzas}/>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));