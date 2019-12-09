module.exports = () => {
    tasks.gulp.task('images', images)
}

const images = () => (
    tasks.gulp.src(global.path.src.images)
        .pipe(tasks.imagemin([
            tasks.imagemin.jpegtran({
                progressive: true
            })
        ]))
        .pipe(tasks.gulp.dest(global.path.build.images))
        .pipe(tasks.browserSync.stream())
)
