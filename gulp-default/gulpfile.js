const browserSync = require("browser-sync").create();
const gulp = require("gulp");

gulp.task("default", function () {
  browserSync.init({
    open: false,
    proxy: "localhost:8080", // proxy: "127.0.0.3:8080" if using the no-nginx version
  });
});
