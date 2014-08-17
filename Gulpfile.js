var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('build', function () {
  gulp
    .src('*.scss')
    .pipe(plugins.sass({
      onError: function (e) {
        console.log(e);
      },
      sourceMap: 'sass',
      sourceComments: 'map',
      precision: 10,
      // imagePath: 'assets/img',
    }))
    .pipe(plugins.autoprefixer("last 2 versions", "> 1%", "ie 8", {
      map: false
    }))
    .pipe(gulp.dest('./'));
});
