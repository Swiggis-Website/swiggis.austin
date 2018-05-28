'use strict';
var React = require('react');
var Row = require('react-bootstrap').Row;

var Page = require('./../layout/page/page.jsx');
var About = React.createClass({
    render: function () {

        var aboutInfo = {
            title: 'About',
            subtitle: 'React Drive CMS Demo',
            description: 'An easy way to publish articles directly from Google Drive',
            sidebarImage: '../images/default-about.jpg',
            path: "about"
        };

        return (
            <Page
                pageInfo={aboutInfo}
                menuVisible={this.props.menuVisible}
                categories={this.props.store.category}
                handleRouting={this.props.handleRouting}
                setMainProperty={this.props.setMainProperty}
                activeCategory={this.props.activeCategory}
                modal={this.props.modal}
            >
                <div className="author-bio">
                    <div className="author-bio__info">
                        
                        <h1>SWIGGIS - PURPOSE</h1>
                        <p>Affectionately known as SWIGGIS, we are an Austin area organization of female geospatial professionals dedicated to awareness, education, and participation in Geography and Geographic Information Systems (GIS).
                        SWIGGIS Austin is proud to organize and participate in local:</p>
                        <ul>
                        <li>Charity Events</li>
                        <li>Professional Development Workshops</li>
                        <li>Social Hours</li>
                        <li>Youth Outreach and Mentoring</li>
                        </ul>

                        <h1>SWIGGIS - HISTORY</h1>
                        <p>“Supporting Women in Geography” (SWIG) originally started in the academic realm in response to perceived and real gender inequality differences in academia. Several autonomous organizations have formed across North America to promote the participation of women in Geography and these groups share the moniker “SWIG”. Our group was established in 2007 and is the first of its kind that has formed in the professional realm and is built upon the same ideas and philosophies as SWIG and includes not only geographers but also the technologically savvy GIS users.
                        </p>
                        <p>We continue the single-sex tradition because we enjoy the company of like-minded women who place importance upon the human and social aspects of the natural environment. We are an informal community of women from a wide range of backgrounds. Our members represent a large variety of private businesses, public institutions, and local and state agencies. Our common thread is that we are trained women geographers and as a result have a unique perspective on the world. This is a forum for women in Geography and GIS to be inquisitive about GIS and its technology, discuss ideas, and feel free to speak their minds about the field.
                        </p>
                    </div>
                </div>

                <footer className="split-footer">
                    <a href="#/contact">Contact</a>
                </footer>
            </Page>
        )
    }
});
module.exports = About;