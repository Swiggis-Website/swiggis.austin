'use strict';
var React = require('react');
var Sidebar = require('./../sidebar/sidebar.jsx');
var Menu = require('./../menu/menu.jsx');
var MenuBurger = require('./../menu/menuBurger.jsx');
var EventsModal = require('./../modal/eventsModal.jsx');
var Page = React.createClass({
    render: function () {
        return (
            <div>
                <Menu
                    menuVisible={this.props.menuVisible}
                    categories={this.props.categories}
                    handleRouting={this.props.handleRouting}
                    setMainProperty={this.props.setMainProperty}
                    activeCategory={this.props.activeCategory}
                />
                <main className={('container page-fadein left-container' + ' page-' + this.props.pageInfo.path + ' container-menu-' + (this.props.menuVisible ? 'open' : 'closed'))}>
                <header className="hero-image" role="banner" style={{backgroundImage: 'url(images/SWIGGIS_logo.jpg)'}}>
                        <MenuBurger
                            setMainProperty={this.props.setMainProperty}
                            menuVisible={this.props.menuVisible}
                        />
                </header>
                        <section className="col-md-7 col-sm-12 main-content modal-container">
                            {this.props.children}
                            <EventsModal
                                modal={this.props.modal}
                                setMainProperty={this.props.setMainProperty}
                            />
                        </section>
                </main>
            </div>
        )
    }

});
module.exports = Page;