const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync');
const { src, dest, watch, series } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const stylelint = require('gulp-stylelint');

sass.compiler = require('sass');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('css'))
        .pipe(browsersync.stream())
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
    });
    watch('sass/**/*.scss', css);
    watch('*.html').on('change', browsersync.reload)
}

exports.css = css;
exports.lint = lint;
exports.serve = serve;
exports.default = series(css, serve);
