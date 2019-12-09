module.exports = () => {
    tasks.gulp.task('styles', styles)
}

const styles = () => (
    tasks.gulp.src(global.path.src.styles)
        .pipe(tasks.autoprefixer({
            cascade: false
        }))
        .pipe(tasks.cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(tasks.gulp.dest(global.path.build.styles))
        .pipe(tasks.browserSync.stream())
)
