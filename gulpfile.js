const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

exports.css = css;
exports.default = parallel(css);
