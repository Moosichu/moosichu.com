var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('styles', function() {
  // Get one .styl file and render 
  gulp.src('./css/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('build', function() {
  var args = ['styles'];

  //sequence.apply(null, args);
});
