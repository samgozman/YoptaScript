const
  browserify = require('./gulp/browserify'),
  gulp = require('gulp');

gulp.task('build', browserify('./src/browser', './dist/yopta.js'));
gulp.task('watch', () => gulp.watch('./src', ['build']));

gulp.task('default', ['build']);
