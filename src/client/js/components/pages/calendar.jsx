'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var Page = require('./../layout/page/page.jsx');

var IFrame = createReactClass({
    render: function () {
        return (
            <iframe 
            src={this.props.src} 
            style={this.props.style} 
            width={this.props.width} 
            height={this.props.height} 
            frameBorder={this.props.frameBorder} 
            scrolling={this.props.scrolling}>
            </iframe>
        )
    }
});

var Calendar = createReactClass({
    render: function () {

        var calendarInfo = {
            title: 'Calendar',
            subtitle: 'Events Calendar',
            description: 'All of our meetup events',
            sidebarImage: '../images/default-contact.jpg',
            path: "calendar"
        };

        return (
            <Page
                pageInfo={calendarInfo}
                menuVisible={this.props.menuVisible}
                categories={this.props.store.category}
                handleRouting={this.props.handleRouting}
                setMainProperty={this.props.setMainProperty}
                activeCategory={this.props.activeCategory}
                modal={this.props.modal}
            >
                <div className="author-bio">
                    <div className="author-bio__info">  
                    <IFrame 
                    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=u3sfsl0gsunalmgl6003sis8d2kvf98f%40import.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FChicago" 
                    style={{borderWidth: 0}} width="800" height="600" frameBorder="0" scrolling="no">
                    </IFrame>
                    </div>
                </div>

                <footer className="split-footer">
                    <a href="#/contact">Contact</a>
                </footer>
            </Page>
        )
    }
});
module.exports = Calendar;