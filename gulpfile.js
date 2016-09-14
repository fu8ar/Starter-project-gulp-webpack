'use strict'; 
 
// Gulp + Plugins
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin');

// Webpack
var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require("./webpack.config.js"),
    myDevConfig = Object.create(webpackConfig),
    gutil = require("gulp-util");

/*
  Tasks
*/

// Minify HTML
gulp.task('minify-html', function () {
    return gulp.src('./*.html')
     .pipe(htmlmin({ collapseWhitespace: true }))
     .pipe(gulp.dest('./dist/'))
});

// Optimize Images
gulp.task('optimise-images', function () {
  return gulp.src('./temp-images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/siteFiles/images'));
});


/*
  Webpack 
*/

// Webpack Object
var devCompiler = webpack(myDevConfig);

// Build Webpack Build
gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// Webpack Dev Server
gulp.task("webpack-dev-server", function(callback) {

    // Start a webpack-dev-server
    new WebpackDevServer( devCompiler, {
        publicPath: "/siteFiles/js/",
        contentBase: './dist/',
        stats: {
          colors: true
        }
      })
      .listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/");
    });

    // Watch Rebuild 
    gulp.watch('temp-images/**', ['optimise-images', 'webpack-dev-server']);
    gulp.watch('./*.html', ['minify-html', 'webpack-dev-server']);

  });


gulp.task('default', ['minify-html', 'optimise-images', 'webpack-dev-server']);

