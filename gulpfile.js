// Require gulp
var gulp = require('gulp');
// Reload the browser on file changes
var browserSync = require('browser-sync');

// Serve application
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: '.',
		},
	});
});

// Run all Gulp tasks and serve application
gulp.task('default', ['serve'], function () {
	gulp.watch('./*', browserSync.reload);
});
