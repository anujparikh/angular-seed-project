var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function () {
    return sass('styles/scss/**/*.scss')
        .pipe(gulp.dest('app/css'))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['sass'], function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch(['*.html', 'styles/**/*.css', 'features/**/*.*', 'components/**/*.*'], {cwd: 'app'}, reload);
});
