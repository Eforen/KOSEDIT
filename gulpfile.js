var gulp = require('gulp');
var ghpages = require('gh-pages');
var concat = require('gulp-concat'); // Gulp File concatenation plugin
var path = require('path');


gulp.task('static', gulp.series(function () {
    return gulp.src("./website/static/**/*")
    .pipe(gulp.dest('dist'))
}));

gulp.task('js', gulp.series(function () {
    return gulp.src([
        "website/src/**/*",
        '!website/src/kOSgen/**/*',
        '!website/src/kOSblocks/**/*'
    ])
        .pipe(gulp.dest('dist/js'))
}));

gulp.task('jsConcat', gulp.series(function () {
    return gulp.src([
        'website/src/kOSblocks/**/*',
        'website/src/kOSgen/kOS.js',
        'website/src/kOSgen/**/*',
    ])
    .pipe(concat('kOSall.js'))
    .pipe(gulp.dest('dist/js'))
}));
    
gulp.task('build', gulp.series(['static', 'js', 'jsConcat']));

/**
 * Push build to gh-pages
 */
gulp.task('deploy', gulp.series(['build'], function (cb) {
    ghpages.publish(path.join(process.cwd(), 'dist'), cb);
}));