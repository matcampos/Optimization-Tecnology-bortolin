var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

/*
Criação de variaveis
*/

var scssFiles = './src/scss/style.scss';
var cssDest = './css';

//Desenvolvimento
var sassDevOptions = {
	outputStyle:'expanded',
};

//Produção
var sassProdOptions = {
	outputStyle:'compressed'
};

//TASK 'sassdev' - para excutar ela - gulp sassdev
gulp.task('sassdev', function(){
	return gulp.src(scssFiles)
	.pipe(sass(sassDevOptions).on('error', sass.logError))
	.pipe(gulp.dest(cssDest)); 
});

//TAsk 'sassprod' - para executar ele - gulp  sassprod
gulp.task('sassprod', function(){
	return gulp.src(scssFiles)
	.pipe(sass(sassProdOptions).on('error', sass.logError))
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest(cssDest)); 
	
});

//TAsk 'watch' - para executar ela - gulp watch
gulp.task('watch', function(){
	gulp.watch(scssFiles,['sassdev','sassprod']);
});




 







gulp.task('default', function(){
	console.log('teste 123');
	console.log('teste 1235555');
});