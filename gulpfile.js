var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    clean = require('del'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port: 8010
  });
});

gulp.task('build:html', ['clean:html'], function () {
  gulp.src('./src/*.*')
    .pipe(gulp.dest('./public/'));

  gulp.src('./src/app/templates/*.html')
    .pipe(gulp.dest('./public/app/templates/'))
    .pipe(connect.reload());
});

gulp.task('build:sass', ['clean:css'], function () {
  return gulp.src('./src/sass/*.*')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('./public/css/'))
    .pipe(connect.reload());
});

gulp.task('build:scripts', ['clean:js'], function () {
  return gulp.src('./src/app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(babel({
        "presets": ["env"]
      }))
    .pipe(gulp.dest('./public/app/'))
    .pipe(connect.reload());
});

gulp.task('clean:html', function() {
  return clean(['public/**/*.html']);
});

gulp.task('clean:css', function() {
  return clean(['public/css/*.css']);
});

gulp.task('clean:js', function() {
  return clean(['public/app/*.js']);
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.*','./src/app/templates/*.*'], ['build:html']);
  gulp.watch(['./src/sass/*.*'], ['build:sass']);
  gulp.watch(['./src/app/*.*','./src/app/components/*.*'], ['build:scripts']);
});

gulp.task('default', ['connect', 'build:html', 'build:sass', 'build:scripts', 'watch']);
