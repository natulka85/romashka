'use strict';

var gulp =require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var notify = require("gulp-notify");



gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            includePaths: './foundation-sites/scss/'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));

    gulp.src('./sass/templates/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/templates'));


});

gulp.task('jade', function() {
    gulp.src('./layout/pages/sea/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(rename({prefix: 'sea-'}))
        .pipe(gulp.dest('./html_pages/'));

    gulp.src('./layout/pages/green/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(rename({prefix: 'green-'}))
        .pipe(gulp.dest('./html_pages/'));

    gulp.src('./layout/pages/siz/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(rename({prefix: 'siz-'}))
        .pipe(gulp.dest('./html_pages/'));

    gulp.src('./layout/pages/blue/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(rename({prefix: 'blue-'}))
        .pipe(gulp.dest('./html_pages/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/blocks/*.scss', ['concat:scss']);
    gulp.watch('./sass/components/*.scss', ['concat:scss']);
    gulp.watch('./sass/layout/*.scss', ['concat:scss']);
    gulp.watch('./sass/vendor/**/*.scss', ['concat:scss']);
    gulp.watch('./sass/wrapps/**/*.scss', ['concat:scss']);
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('jade:watch', function () {
    gulp.watch('./**/*.jade', ['jade']);
});


gulp.task('js:watch', function () {
    gulp.watch('./js/**/*.js', ['concat:js']);
});



gulp.task('concat:scss', function() {
     gulp.src(['./sass/blocks/**/*.scss'])
        .pipe(concat('_blocks.scss'))
        .pipe(gulp.dest('./sass/'));

    gulp.src(['./sass/components/**/*.scss'])
        .pipe(concat('_components.scss'))
        .pipe(gulp.dest('./sass/'));

    gulp.src(['./sass/layout/**/*.scss'])
        .pipe(concat('_layout.scss'))
        .pipe(gulp.dest('./sass/'));

    gulp.src(['./sass/vendor/**/*.scss'])
        .pipe(concat('_vendor.scss'))
        .pipe(gulp.dest('./sass/'));
    gulp.src(['./sass/wrapps/**/*.scss'])
        .pipe(concat('_wrapps.scss'))
        .pipe(gulp.dest('./sass/'));
});

gulp.task('concat:js', function() {
    gulp.src(['./js/_sliders.js', './js/_scripts.js', './js/components/*.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('./js/'));

});


gulp.task('prefix', function () {
    return gulp.src('./css/global.css')
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('prefix:watch', function (){
    gulp.watch('./css/global.css', ['prefix']);
});

gulp.task('default', function(callback) {
    runSequence(
        'concat:scss',
        'sass',
        'jade',
        'sass:watch',
        'jade:watch',
        'concat:js',
        'js:watch',
        'prefix',



        callback);

});

