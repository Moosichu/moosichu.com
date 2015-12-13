var gulp = require('gulp');
var stylus = require('gulp-stylus');
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

// other assets
gulp.task('assets', function () {
  gulp.src(assetPath)
    .pipe(gulp.dest('./public'));
});

gulp.task('build', function() {
  var args = ['clean', 'styles', 'assets'];

  runSequence.apply(null, args);
});
