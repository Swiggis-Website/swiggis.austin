'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var useRouterHistory = require('react-router').useRouterHistory;
var createHashHistory = require('history').createHashHistory;
var History = useRouterHistory(createHashHistory)();

var $ = window.$;
var config = window.configReactDriveCms;
    var drive = require('./js/driveAccess/drive.js')(config, $);
    drive.init(function (views, zips) { 
        var App = require('./js/components/app/app.jsx')(drive, views, zips);
        var routes = require('./js/components/app/routes.jsx')(App);
        ReactDOM.render(React.createElement(
            Router,
            {history: History},
            routes
        ), document.getElementById('app-mount'));
    });