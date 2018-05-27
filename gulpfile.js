const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const debug = require("gulp-debug");
const watch = require("gulp-watch");
const clean = require("gulp-clean");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/node_modules/all-polyfills/"
};



gulp.task("all-polyfills.min.js", () => {
  return gulp.src([
      "src/**/**.js"
    ])
    .pipe(clean())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("watch:all-polyfills.min.js", function() {
  watch("./src/**/**.js", function() {
    gulp.run("all-polyfills.min.js");
  });
});


gulp.task("default", ["all-polyfills.min.js"]);


gulp.task("all", ["default", "watch"]);

gulp.task("watch", ["watch:all-polyfills.min.js"]);