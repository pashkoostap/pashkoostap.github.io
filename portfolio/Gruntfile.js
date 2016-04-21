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
        'img/barbershop.jpg': 'src/barbershop.jpg',
        'img/level-builders.jpg': 'src/level-builders.jpg',
        'img/royalweb.club.jpg': 'src/royalweb.club.jpg',
        'img/sedona.jpg': 'src/sedona.jpg'
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