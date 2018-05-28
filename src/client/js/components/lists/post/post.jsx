'use strict';
var React = require('react');
var string = require('./../../../utils/utils').string;

var Post = React.createClass({
    render: function () {
        var self = this;
        var articleUrl = '#/article/' + string.slug(self.props.article.title);
        var categoryUrl = '#/category/' + self.props.article.category.id + '/' + string.slug(self.props.article.category.title);
        return (
            <div key={this.props.key} className="post-preview col-xs-10  no-gutter">
                <div>
                    <h2>
                        <a
                            role='button'
                            onClick={self.props.handleRouting.bind(null, self.props.article)}
                            href={articleUrl}
                            title={this.props.article.title}
                        >
                            {this.props.article.title}
                        </a>
                    </h2>

                </div>
                <p>{this.props.article.subtitle}</p>

                <p className="meta">
                    Published in : &nbsp;
                    <a
                        role='button'
                        onClick={self.props.handleRouting.bind(null, self.props.article.category)}
                        href={categoryUrl}
                        title={self.props.article.category.title}
                    >
                    {self.props.article.category.title}
                    </a>
                </p>
            </div>
        )
    }
});
module.exports = Post;