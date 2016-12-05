const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();

const SRC_DIR = 'src';
const OUT_DIR = 'build';

const ALL_FILES = [`${SRC_DIR}/**/*`];
const TS_FILES = [`${SRC_DIR}/**/*.ts`];
const OTHER_FILES = [`${SRC_DIR}/**/*`, `!${TS_FILES[0]}`];

function copyTask() {
    return gulp.src(ALL_FILES, { base: SRC_DIR }).pipe(gulp.dest(OUT_DIR));
}

function watchTask() {
    browserSync.init({
        server: {
            baseDir: OUT_DIR
        }
    });

    gulp.watch(TS_FILES, ['copy', 'reload-after-ts']);
    gulp.watch(OTHER_FILES, ['reload-after-copy']);
}

function browserSyncReloadTask(done) {
    browserSync.reload();
    done();
}

gulp.task('ts', shell.task(['tsc']));
gulp.task('copy', copyTask);
gulp.task('default', ['ts', 'copy']);
gulp.task('watch', ['ts', 'copy'], watchTask);
gulp.task('reload-after-ts', ['ts'], browserSyncReloadTask);
gulp.task('reload-after-copy', ['copy'], browserSyncReloadTask);
