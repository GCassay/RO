var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('ws', function() {
  gulp.src('node_modules')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      port: 8010,
      livereloadPort: 8010,
      defaultFile: 'index.html',
      open: true
    }));
});
