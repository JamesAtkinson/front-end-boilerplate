const autoprefixer = require('autoprefixer');
const { src, dest, watch } = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('css'))
}

exports.default = function() {
    watch('sass/**/*.scss', css)
}
