module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'css/style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'pic/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'pic/'
  			}]
  		}
  	},

   watch: {
    scripts: {
        files: ['style/*.sass'],
        tasks: ['style'],
        options: {
            spawn: false,
        },
    }
}

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin']);
};