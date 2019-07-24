const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

exports.default = function() {
    watch('sass/**/*.scss', css)
}
