module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    'dart-sass': {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'main.css': 'scss/main.scss'
        }
      }
    },
    postcss: {
      options: {
        procesors: [
          require('autoprefixer')({
            browsers: ['last 3 versions', 'Firefox 30']
          })
        ]
      },
      dist: {
        src: 'main.css'
      }
    },
    watch: {
      sass: {
        files: 'scss/{,buttons/}*.scss',
        tasks: ['styles']
      }
    }
  });

  // `grunt styles` Build styles
  grunt.registerTask(
    'styles',
    'Compile stylesheets, and add vendor prefixes',
    ['dart-sass', 'postcss']
  );


  // `grunt dev` Watch for style changes
  grunt.registerTask(
    'dev',
    'Watch and rebuild on file changes',
    ['styles', 'watch']
  );

  // Default task (by running `grunt`): just build the stylesheet
  grunt.registerTask(
    'default',
    'Compile stylesheets, and add vendor prefixes',
    ['styles']
  );
};