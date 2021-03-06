var gulp = require('gulp');
var stylus = require('gulp-stylus');
var less = require('gulp-less');

var runSequence = require('run-sequence');
var del = require('del');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('clean', function () {
  return del('public');
});


var assetPath = ['./assets/**', '!./assets/stylesheets/*.styl'];

gulp.task('styles', function() {
  // Get one .styl file and render 
  gulp.src('./assets/stylesheets/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('bootstrap', function() {
  // Compile bootstrapp less css files
  gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./public/scripts'));
});

// other assets
gulp.task('assets', function () {
  gulp.src(assetPath)
    .pipe(gulp.dest('./public'));
});

gulp.task('build', function() {
  var args = ['clean', 'bootstrap', 'styles', 'assets'];

  runSequence.apply(null, args);
});
