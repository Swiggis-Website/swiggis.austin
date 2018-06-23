'use strict';
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var watchify = require('watchify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function (gulp) {
    var b = watchify(
        browserify({
            cache: {},
            packageCache: {},
            fullPaths: true
        })
    );
    b.transform(babelify, {presets: ["react", "es2015"]});
    b.add('./src/client/client.js');
    var packBundle = function(b){
        console.log("pack bundle.js");
        b.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./assets/js'));
    };
    b.on('update', function(){
        console.log("update bundle.js");
        packBundle(b);
    });

    packBundle(b);
};