module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sass: {
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
  
  grunt.registerTask(
    'styles',
    'Compile stylesheets, and add vendor prefixes',
    ['sass', 'postcss']
  );
};