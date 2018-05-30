'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var useRouterHistory = require('react-router/lib/useRouterHistory');
var createHashHistory = require('react-router/node_modules/history/lib/createHashHistory');
var History = useRouterHistory(createHashHistory)({queryKey: false});

var $ = window.$;
var config = window.configReactDriveCms;
    var drive = require('./js/driveAccess/drive.js')(config, $);
    drive.init(function (views) { 
        var App = require('./js/components/app/app.jsx')(drive, views);
        var routes = require('./js/components/app/routes.jsx')(App);
        ReactDOM.render(React.createElement(
            Router,
            {history: History},
            routes
        ), document.getElementById('app-mount'));
    });