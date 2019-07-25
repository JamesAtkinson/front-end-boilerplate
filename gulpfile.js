const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync');
const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const stylelint = require('gulp-stylelint');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('css'))
}

function lint() {
    return src('sass/**/*.scss')
        .pipe(stylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }))
}

function serve() {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    })
}

exports.css = css;
exports.lint = lint;
exports.serve = serve;
