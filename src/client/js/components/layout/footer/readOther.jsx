'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var OtherArticle = require('./otherArticle.jsx');
var ReadOther = createReactClass({
    render: function () {
        var self = this;
        return (
            <div className="row read-another-section">
                {this.props.articles.map(function (article, i) {

                    return <OtherArticle
                        article={article}
                        key={i}
                        id={i}
                        handleRouting={self.props.handleRouting}
                    />;
                })}
            </div>
        )
    }
});
module.exports = ReadOther;