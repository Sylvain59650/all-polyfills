//const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
// const clean = require("gulp-clean");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  distribFn: "./distrib/fn/",
  demo: "./docs/demo/modules/all-polyfills/distrib/"
};


// gulp.task("clean", function() {
//   return gulp.src([
//       chemins.distrib
//     ])
//     .pipe(clean())
// });

gulp.task("all-polyfills.min.js", () => {
  return gulp.src([
      "src/**/**.js"
    ])
    .pipe(concat("all-polyfills.min.js"))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(gulp.dest(chemins.distrib))
    .pipe(gulp.dest(chemins.demo))
});

gulp.task("all-fn", () => {
  return gulp.src([
      "src/**/**.js"
    ])
    .pipe(gulp.dest(chemins.distribFn))
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(gulp.dest(chemins.distribFn))
});

function makeTask(dirName) {
  return gulp.src([
      "src/" + dirName + "/**.js"
    ])
    .pipe(concat(dirName + ".min.js"))
    .pipe(uglify({
      compress: {
        drop_console: true
      }
    }))
    .pipe(gulp.dest(chemins.distrib))
}

gulp.task("all-categories", () => {
  return Promise.all([
    makeTask("Array"),
    makeTask("ArrayBuffer"),
    makeTask("Element"),
    makeTask("IDBKeyRange"),
    makeTask("Math"),
    makeTask("NodeList"),
    makeTask("Number"),
    makeTask("Object"),
    makeTask("Reflect"),
    makeTask("Regex"),
    makeTask("String"),
    makeTask("window")
  ]);
});

gulp.task("watch:all-polyfills.min.js", function() {
  watch("./src/**/**.js", gulp.series("all-polyfills.min.js"));
});

gulp.task("default", gulp.parallel("all-polyfills.min.js", "all-fn", "all-categories"));

gulp.task("watch", gulp.series("watch:all-polyfills.min.js"));