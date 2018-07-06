var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var concat       = require('gulp-concat');
var imagemin     = require('gulp-imagemin');
var notify       = require("gulp-notify");
var rename       = require('gulp-rename');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var babel        = require('gulp-babel');

// The JS files we're minifying & concatenating.
var jsFiles = [
  './javascripts/src/vendor/fontfaceobserver-1.5.1.js',
  './javascripts/src/fontfaceobserver__custom.js',
  './javascripts/src/vendor/responsive-nav-dropdown.js',
  './javascripts/src/responsive-nav-dropdown--custom.js',
  './javascripts/src/wvu-masthead-nav-search-toggle.js',
  './javascripts/src/vendor/beyondHyper-tabs.js'
];

// Browser Sync
// Static server: watching HTML, Sass, JS and image files.
gulp.task('browser-sync', ['build:sass', 'build:scripts', 'build:image'], function() {
  browserSync.init({
    server: './', // Use the built-in static server for basic HTML/JS/CSS websites.
    open: false
  });
  gulp.watch("./scss/**/**/*.scss", ['build:sass']); // Watch all Sass files
  gulp.watch("./javascripts/src/**/*.js", ['build:scripts']); // Watch all JS files in `javascripts/src/`
  gulp.watch("./*.html").on('change', browserSync.reload); // Watch *.html files at the root & reload on save.
});

// Sass task
// Compile Sass into CSS, autoprefix it, notify about errors & auto-inject into browsers
gulp.task('build:sass', function() {
  return gulp.src('./scss/*.scss') // Only compile the styles.scss base file to `stylesheets/styles.css`
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer()) // Browsers to target are controlled via the `.browserslistrc` file at the root.
    .pipe(gulp.dest('./stylesheets'))
    .pipe(notify({
      title: 'Sass:',
      message: 'Compiled <%= file.relative %>'
    }))
    .pipe(browserSync.stream());
});

// Concatenate, Transpile & Minify JS
// Grab specific JS files from `javascripts/src/**/*` and output `catalog.js` and `catalog.min.js` to `javascripts/dist`.
// NOTE: Babel is a dependency so we can take 3rd party/vendor scripts using ES6+ and transpile them to ES5.
gulp.task('build:scripts', function() {
  return gulp.src(jsFiles) // jsFiles is a JS variable (defined above) for our JS files.
    .pipe(concat('catalog.js'))
    .pipe(gulp.dest('./javascripts/dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(babel({
      presets: ['@babel/env'] // Transpile ES6 to ES5 readable by older browsers. `env` is controlled via the `.browserslistrc` file at the root.
    }))
    .pipe(uglify())
    .on('error', function(err) { console.log(err); }) // Uglify: If a JS file has non-normative language in it, tell us what the error is.
    .pipe(gulp.dest('./javascripts/dist/'))
    .pipe(notify({
      title: 'JS:',
      message: 'Compiled <%= file.relative %>'
    }))
    .pipe(browserSync.stream());
});

// Compress all images in the "images" folder in the root.
gulp.task('build:image', function(){
  gulp.src('images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('images/'))
    .pipe(notify({
      title: 'Images:',
      message: 'Losslessly reduced filesizes.'
    }))
    .pipe(browserSync.stream());
});

// Default task.
// Run it by navigating to the project directory via Terminal and typing `gulp`.
// NOTE: Only add other tasks here that are not included via the browser-sync task.
gulp.task('default', ['browser-sync']);
