'use strict';
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Redirect = Router.Redirect;

var Home = require('./../pages/home.jsx');
var About = require("./../pages/about.jsx");
var Membership = require("./../pages/membership.jsx");
var Contact = require("./../pages/contact.jsx");
var Article = require("./../pages/article.jsx");
var Category = require("./../pages/category.jsx");

var routes = function (App) {
    return (
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="membership" component={Membership}/>
            <Route path="contact" component={Contact}/>
            <Route path="article/:slug" component={Article}/>
            <Route path="category/:categoryId/:slug" component={Category}/>
            <IndexRoute component={Home}/>
            <Redirect from="/" to="home" />
            <Route path="*" component={App}/>
        </Route>
    );
};
module.exports = routes;