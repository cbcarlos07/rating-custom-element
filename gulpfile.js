var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
    return gulp.src('./build/*.js')
        .pipe(concat('made-with-love.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function() {
    return gulp.src('./dist/**/*.css')
        .pipe(rename('rating.css'))
        .pipe(gulp.dest('./dist/element'));
});
//fonts
gulp.task('fonts', function () {
  return gulp.src(['./dist/radio-custom-element/font=awesome-webfont.*'])
      .pipe(gulp.dest('./dist/element'))
})

gulp.task('default',['concat', 'rename', 'fonts'])

