'use strict';
var React = require('react');
var string = require('./../../../utils/utils').string;
var Row = require('react-bootstrap').Row;
var Credits = React.createClass({
    render: function () {
        var self = this;
        var categoryUrl = '#/category/' + self.props.category.id + '/' + string.slug(self.props.category.title);
        var date = string.formatDate(self.props.lastUpdated);
        return (
            <Row >
                <div className="col-xs-12 col-sm-2">
                    <a href="#/about">
                        <img src="images/SWIGGIS_icon.png" className="user-icon " alt="user-image" />
                    </a>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="credits-info">
                        <p>Published on the
                            <span className="credits-underline">{date}</span>
                        </p>
                        <p>
                            <span className="credits-separator">by</span>
                            <a href="#/about">
                                {self.props.author}
                            </a>
                            <span className="credits-separator">in</span>
                            <a
                                href={categoryUrl}
                            >
                                {self.props.category.title}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="social">
                        <p>Connect with SWIGGIS</p>
                        <div className="social-links">
                            <a className="social-icon" href="https://twitter.com/SWIGGISAustin" target="_blank" >
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a className="social-icon" href="https://www.linkedin.com/in/swiggis-austin-86299a15a/" target="_blank" >
                                <i className="fa fa-linkedin"></i>
                            </a>

                            <a className="social-icon" href="https://www.meetup.com/SWIGGISAustin/" target="_blank" >
                                <i className="fa fa-calendar"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
});
module.exports = Credits;