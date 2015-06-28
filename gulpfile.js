var gulp = require("gulp"),
	connect = require("gulp-connect"),
	opn = require("opn"),
	path = require('path'),
	less = require('gulp-less');

// Запускаем локальный сервер
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});

// Работа с HTML
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Работа с CSS
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

// Работа с JS
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

// Слежка
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/css/*.css'], ['css']);
});

// Задача по-умолчанию
gulp.task('default', ['connect', 'watch']);

//less
gulp.task('less', function () {
  return gulp.src('./app/css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/css'));
});