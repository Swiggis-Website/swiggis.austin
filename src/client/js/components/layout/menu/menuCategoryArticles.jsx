'use strict';
var React = require('react');
var createReactClass = require('create-react-class');
var string = require('./../../../utils/utils').string;

var MenuCategoryArticles = createReactClass({
    render: function () {
        var self = this;
        return (
            <ul className={("menu-articles-list" + (self.props.expanded ? ' articles-expanded' : ''))}>
                {self.props.articles.map(function (article, i) {
                    var articleUrl = '#/article/' + string.slug(article.title);
                    return <li key={i} className={("menu-articles-item" + (self.props.expanded ? ' article-expanded' : ''))}>
                        <a
                            onClick={self.props.handleRouting.bind(null, article)}
                            href={articleUrl}
                        >{article.title}</a>
                    </li>;
                })}
            </ul>
        )
    }
});
module.exports = MenuCategoryArticles;