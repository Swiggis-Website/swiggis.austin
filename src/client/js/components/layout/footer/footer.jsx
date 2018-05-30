'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var ReadOther = require('./readOther.jsx');
var Credits = require('./credits.jsx');
var Footer = createReactClass({
    render: function () {
        return (
            <footer className="single">
                <Credits
                    lastUpdated={this.props.lastUpdated}
                    category={this.props.category}
                    author={this.props.author}
                />
            </footer>
        )
    }
});
module.exports = Footer;