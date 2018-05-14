'use strict';
var slug = require('./slug.js');
var _ = require('lodash');
var parseUrl = function (views) {
    var url = window.location.href;
    var urlSplit = url.split('/');
    var elementType = 'page';
    var elementId = 0;
    var slugURL = '';
    var elementFileId = '';
    var elementPath = '';
    for (var i = 0; i < urlSplit.length; i++) {
        if (urlSplit[i] === 'article') {
            elementType = 'article';
            slugURL = urlSplit[i + 1];
            _.forEach(views.articles, function(article) {
                var slugTitle = slug(article.title);
                if (slugTitle == slugURL) {
                    elementId = article.id;
                }
              });
            elementFileId = views.articles[elementId]['driveId'];
            break;
        } else if (urlSplit[i] === 'category') {
            elementType = 'category';
            elementId = urlSplit[i + 1];
            break;
        } else if (urlSplit[i] === '#!') {
            elementPath = urlSplit[i + 1];
        }
    }

    return {
        elementType: elementType,
        elementId: elementId,
        elementFileId: elementFileId,
        elementPath: elementPath
    };
};
module.exports = parseUrl;