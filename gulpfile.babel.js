
//html
import htmlmin from "gulp-htmlmin";

//css
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

//javascript
import gulp from "gulp";
import babel from "gulp-babel";
import terser from "gulp-terser";

//pug
import pug from 'gulp-pug'

//sass
import sass from 'gulp-sass'

//common
import concat from 'gulp-concat'

//clearcss
import clean from 'gulp-purgecss'

//cache bust
import cacheBust from 'gulp-cache-bust'

//optimizacion imagenes
import imagemin from 'gulp-imagemin'

//import browser
import { init as server, stream, reload} from 'browser-sync'

//import plumber
import plumber from 'gulp-plumber'

//Typescript
import ts from 'gulp-typescript';

const production = true;

//constantes
const cssPlugins = [cssnano(), autoprefixer()];

gulp.task('babel', ()=>{
    return gulp
     .src('./src/js/*.js')
     .pipe(plumber())
     .pipe(concat('scripts-min.js'))
     .pipe(babel())
     .pipe(terser())
     .pipe(gulp.dest('./docs/js'))
});

gulp.task('views',() =>{
    return gulp
    .src('./src/views/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({ pretty: production ? false : true}))
    .pipe(cacheBust({ type:'timestamp'}))
    .pipe(gulp.dest('./docs'))
});

gulp.task('sass', ()=>{
    return gulp
    .src('./src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('./docs/css'))
    .pipe(stream());
});
/*
gulp.task('images', ()=> {
    return gulp.src('./src/images/*')
    .pipe(plumber())
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true}),
        imagemin.mozjpeg({ quality: 100, progressive: true}),
        imagemin.optipng({ optimizationLevel: 1 })
    ]))
    .pipe(gulp.dest('./docs/images'))
})
*/
gulp.task('clean', ()=>{
    return gulp
    .src('./docs/css/styles.css')
    .pipe(plumber())
    .pipe(clean({content: ['./docs/*.html']}))
    .pipe(gulp.dest('./docs/css'))
});

//automatizar

gulp.task('default', ()=>{
    server({
        server:'./docs'
    });
    gulp.watch('./src/views/**/*.pug', gulp.series('views')).on('change', reload);
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', reload);
});

