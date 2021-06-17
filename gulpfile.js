const
  browserify = require('./gulp/browserify'),
  gulp = require('gulp'),
  package = require('./package.json');

async function build(){
	browserify('./src/browser', './dist/yopta.min.js', {
  license: `/*! YoptaScript v${package.version} (https://yopta.space) | Copyright (c) 2016-2017 Yopta.Space project and Contributors | Licensed under the MIT license*/`
})
}

gulp.task('build', build);
gulp.task('watch', async () => gulp.watch('./src', gulp.series('build')));

gulp.task('default', gulp.series('build'));
