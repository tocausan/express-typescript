const gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    ignore = require('gulp-ignore'),
    scss = require('gulp-scss'),
    ejs = require("gulp-ejs")
    refresh = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    minifyCSS = require('gulp-minify-css'),
    embedlr = require('gulp-embedlr'),
    ts = require("gulp-typescript"),
    tsProject = ts.createProject("tsconfig.json");

const path = {
    src: 'src',
    build: 'build'
};

// rimraf build
gulp.task('rimraf', () => {
    return gulp.src([path.build], {read: false})
        .pipe(ignore('node_modules/**'))
        .pipe(rimraf());
});

// complile typescript
gulp.task('compile', () => {
    gulp.src([path.src + '/**/*.ts'])
        .pipe(tsProject())
        .js.pipe(gulp.dest(path.build))
});

// public style
gulp.task('style', () => {
    gulp.src([path.src + '/public/**/*.css', path.src + '/public/**/*.scss'])
        .pipe(scss({"bundleExec": true}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.build + '/public'))
        .pipe(refresh(server));
});

// views template
gulp.task('template', () => {
    gulp.src(["**/*.ejs","**/*.html"])
        .pipe(ejs())
        .pipe(gulp.dest(path.build))
        .pipe(refresh(server));
});

gulp.task('copy', ['clean'], () => {
    return gulp.src([path.src + '/public/**/*'])
        .pipe(gulp.dest(path.build));
});

gulp.task('default', ['rimraf', 'compile'], () => {

    console.log('gulped and watching');

    gulp.watch(path.src + '/**', () => {
        gulp.run('compile');
    });

    gulp.watch(path.src + '/public/**', () => {
        gulp.run('style');
    });

    gulp.watch(path.src + '/views/**', () => {
        gulp.run('template');
    });
});
