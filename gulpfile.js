var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath:'src/',
	devPath:'build/',
	prdPath:'dist/'
}

gulp.task('lib',function () {
	gulp.src('lib/**/*')
	.pipe(gulp.dest(app.devPath+'vendor'))
	.pipe(gulp.dest(app.prdPath+'vendor'));
});


gulp.task('html',function () {
	gulp.src(app.srcPath + '**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe(gulp.dest(app.prdPath));
});

gulp.task('json',function () {
	gulp.src(app.srcPath + 'data/**/*.json')
	.pipe(gulp.dest(app.devPath + 'data'))
	.pipe(gulp.dest(app.prdPath + 'data'));
	
});

gulp.task('less',function () {
	gulp.src(app.srcPath + 'less/index.less')
	.pipe($.less())
	.pipe(gulp.dest(app.devPath + 'style'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath + 'style'));
});

gulp.task('js', function function_name() {
	gulp.src(app.srcPath + 'script/**/*.js')
	.pipe($.concat('index.js'))
	.pipe(gulp.dest(app.devPath + 'script'))
        .pipe($.uglify('index.js'))
	.pipe(gulp.dest(app.prdPath + 'script'));
})

gulp.task('image', function () {
	gulp.src(app.srcPath + 'img/**/*')
	.pipe(gulp.dest(app.devPath + 'img'))
	.pipe($.imagemin())
	.pipe(gulp.dest(app.prdPath + 'img'));
});

gulp.task('clean', function () {
	gulp.src([app.devPath, app.prdPath])
	.pipe($.clean());
});

gulp.task('build', ['lib', 'image', 'json', 'less', 'html', 'js']);

gulp.task('serve', ['build'], function () {
	$.connect.server({
		root:[app.devPath],
		livereload: true,
		port: 4321
	});


	gulp.watch('lib/**/*', ['lib']);
	gulp.watch(app.srcPath + '**/*.html',['html']);
	gulp.watch(app.srcPath + 'data/**/*.json',['json']);
	gulp.watch(app.srcPath + 'less/**/*.less',['less']);
	gulp.watch(app.srcPath + 'img/**/*',['image']);
	gulp.watch(app.srcPath + 'script/**/*.js',['js']);
});

gulp.task('default',['serve']);



gulp.task('open', function () {
	
	open('htpp://localhost:4321');

})



	// .pipe($.uglify('index.js'))














