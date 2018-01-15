const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('check', ()=>{
  console.log("Gulp is working")
});

gulp.task('less', ()=>{
  gulp.src('./less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./public/css/'))
});