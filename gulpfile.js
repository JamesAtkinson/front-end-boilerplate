const autoprefixer = require('autoprefixer');
const { src, dest, watch } = require('gulp');
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

exports.lint = lint;
exports.default = function() {
    watch('sass/**/*.scss', css)
}
