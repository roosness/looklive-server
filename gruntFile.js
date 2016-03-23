module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    	files: ['*.js','**/*.js','!**/routie.js', '!gruntFile.js','!node_modules/**/*.js'],
    	options: {
		  "curly": true,
		  "eqnull": true,
		  "eqeqeq": true,
		  "undef": true,
		  "globals": {
		    "jQuery": true
		  }
		}
    },
    csslint: {
	  strict: {
	    options: {
	      import: 2
	    },
	    src: ['public/styles/*.css']
	  },
	  lax: {
	    options: {
	      import: false
	    },
	    src: ['public/styles/*.css']
	  }
	},
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'public/min/style.min.css': ['public/styles/*.css']
	    }
	  }
	},
	uglify: {
	    my_target: {
	      files: {
	        'public/min/libs.min.js': ['public/js/libs/*.js'],
	        'public/min/app.min.js': ['public/js/app.js']
	      }
	    }
 	},
 	imagemin: {                          
    
    dynamic: {                        
      files: [{
        expand: true,                 
        cwd: 'public/images',         
        src: ['**/*.{png,jpg,gif}'],
        dest: 'public/images/min'     
      }]
    }
  }
  });
 
  // Default task(s).
  grunt.registerTask('default', []);
 
 // Load the plugin that provides the "jshint" task
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
}; 