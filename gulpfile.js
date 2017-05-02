var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('styles/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watcher', function () {
  gulp.watch('styles/*.scss', ['sass']);
  console.log("Wather is run!")
});



