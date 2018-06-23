'use strict';
var browserify = require('browserify');
var rename = require('gulp-rename');
var source = require("vinyl-source-stream");
var babelify = require('babelify');

module.exports = function (gulp) {
    var b = browserify();
    b.transform(babelify, {presets: ["react", "es2015"]}); // use the babelify transform
    b.add('./src/client/client.js');
    return b.bundle()
        .pipe(source('./src/client/client.js'))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('./assets/js'))
        .pipe(source('./src/client/client.js'))

};