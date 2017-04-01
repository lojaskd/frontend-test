var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    stream = require('streamqueue'),
    spritesmith = require('gulp.spritesmith');

gulp.task('default', ['icons', 'fonts', 'sprite', 'css', 'js']);

gulp.task('css', function(){
  var source = 'src/scss/**/*.scss';

  return gulp.src(source)
      .pipe(sass({precision:10})).on('error',function(err){
        console.log(err);
        this.emit('end');
      })
      .pipe(cleanCss({level:0}))
      .pipe(gulp.dest('assets/css/'));
});

gulp.task('js', function(){
  return stream({objectMode: true},
        gulp.src('bower_components/jquery/dist/jquery.js'),
        gulp.src('bower_components/materialize/dist/js/materialize.min.js'),
        gulp.src('src/js/main.js')
      )
      .pipe(concat('main.js'))
      .pipe(uglify().on('error',function(err){
        console.error('Error in compress task', err.toString());
        this.emit('end');
      }))
      .pipe(gulp.dest('assets/js/'));
});

gulp.task('sprite', function(){
  var source = 'src/sprites/**/*.png',
      sprite = gulp.src(source)
          .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: '_sprites.scss'
          }).on('error',function(err){
            console.log(err);
          }));
  
  return sprite.img.pipe(gulp.dest('assets/img/')),
         sprite.css.pipe(gulp.dest('src/scss/components/'));
});

gulp.task('icons', function(){
  return;
//  return gulp.src('bower_components/font-awesome-sass/assets/fonts/**/*.*')
//      .pipe(gulp.dest('src/fonts'));
});

gulp.task('fonts', function(){
  return gulp.src('bower_components/materialize/dist/fonts/**/*.*')
      .pipe(gulp.dest('assets/fonts'));
});

gulp.task('watch', function(){
  var cssSrc = 'src/scss/**',
      jsSrc = 'src/js/**',
      spritesSrc = 'src/sprites/**';
      
  return gulp.watch(cssSrc, ['css']),
      gulp.watch(jsSrc, ['js']),
      gulp.watch(spritesSrc, ['sprite']);
});