'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var MenuCategory = require('./menuCategory.jsx');
var Menu = createReactClass({
    render: function () {
        var self = this;
        return (
            <div id="menu" className={(this.props.menuVisible) ? 'menu-open' : 'menu-collapsed'}>
                <ul>
                    <li>
                        <i className="fa fa-home"></i>
                        <a className="menuitem" href="#/home">Home</a>
                    </li>
                    <li>
                        <i className="fa fa-info"></i>
                        <a className="menuitem" href="#/about"> About</a>
                    </li>
                    <li>
                        <i className="fa fa-user"></i>
                        <a className="menuitem" href="#/membership">Membership</a>
                    </li>
                    <li>
                        <i className="fa fa-calendar"></i>
                        <a className="menuitem" href="#/calendar">Calendar</a>
                    </li>
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a className="menuitem" href="#/contact">Contact</a>
                    </li>
                </ul>
                <hr />
                <ul className="menu-category-list">
                    {self.props.categories.map(function (category, i) {
                        return <MenuCategory
                            key={i}
                            id={i}
                            category={category}
                            handleRouting={self.props.handleRouting}
                            setMainProperty={self.props.setMainProperty}
                            activeCategory={self.props.activeCategory}
                        />;
                    })}
                </ul>
            </div>
        )
    }
});
module.exports = Menu;