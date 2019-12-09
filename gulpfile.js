tasks = {
    gulp: require('gulp'),
    autoprefixer: require('gulp-autoprefixer'),
    cleanCss: require('gulp-clean-css'),
    imagemin: require('gulp-imagemin'),
    browserSync: require('browser-sync').create(),

    external: {
        config: require('./tasks/configuration.js')
    }
}

tasks.external.config.forEach(confPath => require(confPath)())

global.path = {
    build: {
        styles: './build/styles',
        images: './build/images',
        html: './build',
    },
    src: {
        styles: './src/styles/*.css',
        images: './src/images/*.jpg',
        html: './src/*.html',
    }
}



const configuration = {
    server: {
        baseDir: global.path.build.html
    }
}

exports.start = () => (
    tasks.browserSync.init(configuration),
    tasks.browserSync.reload(),
    this.stream()
)

exports.stream = () => (
    tasks.gulp.watch(global.path.src.styles, tasks.gulp.series('styles')),
    tasks.gulp.watch(global.path.src.images, tasks.gulp.series('images')),
    tasks.gulp.watch(global.path.src.html, tasks.gulp.series('html'))
)
