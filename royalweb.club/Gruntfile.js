module.exports = function(grunt) {
 
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    less: {
      style: {
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },
    
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 9']
      },
      style: {
        src: 'css/style.css'
      },
    }, 
    
    cmq: {
      style: {
        files: {
          'css/style.css': ['css/style.css'] 
        }
      }
    },
    
   cssmin: {
      style: {
        files: {
          'css/style-min.css': ['css/style.css']
        }
      }
    }, 
    
    imagemin: {
      static: {
        options: {
          optimizationLevel: 3        
        },
        files: {
          'src/page-4-background-full.jpg': 'img/page-4-background-full.jpg',
        }
      }
    },
    
    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
    },
  },
}
                   
  });
  
  
  
  grunt.registerTask('build', [
    'less',
    'autoprefixer',
    'cmq',
    'cssmin'
  ]);
};