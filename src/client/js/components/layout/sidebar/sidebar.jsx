'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var MenuBurger = require('./../menu/menuBurger.jsx');
var PageInfo = require('./pageinfo.jsx');

var Sidebar = createReactClass({
    render: function () {
        var sidebarStyle = {
            backgroundImage: 'url(' + this.props.pageInfo.sidebarImage + ')'
        };
        return (
            <section
                className="sidebar col-md-5 col-sm-12"
                style={sidebarStyle}
            >
                <MenuBurger
                    setMainProperty={this.props.setMainProperty}
                    menuVisible={this.props.menuVisible}
                />
                <PageInfo
                    setMainProperty={this.props.setMainProperty}
                    pageInfo={this.props.pageInfo}
                />
            </section>
        );
    }
});
module.exports = Sidebar;