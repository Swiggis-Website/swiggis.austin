'use strict';
var noop = function () {
};

var sendMail = function (formValues, callback) {
    callback = callback || noop;
    var $ = window.$;
    var config = window.configReactDriveCms;
    console.log(JSON.stringify(formValues));

    $.ajax({
        method: "POST",
        dataType: 'jsonp',
        accepts: "application/json",
        cache: false,
        data: formValues,
        url: "//www.enformed.io/bhxxb368",
        success: function(response) {
            callback(response);
        },
        error: function(response) {
            callback(response);
        }
    }).done(function (response) {
        callback(response);
    });
};

var getInfo = function (callback) {
    callback = noop;
/*     var $ = window.$;
    $.ajax({
        type: "GET",
        dataType: 'jsonp',
        url: "http://smart-ip.net/info-json" 
    }).done(function (response) {
        callback(response);
    }); */
};

module.exports = sendMail;