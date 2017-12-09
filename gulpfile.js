const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const minifyCss = require('gulp-minify-css')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('default', ['style'])

gulp.task('style', function (done) {
    gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .on('end', done)
})

gulp.task('watch', ['default'], function () {
    gulp.watch(['./sass/**/*.scss'], ['style'])
})