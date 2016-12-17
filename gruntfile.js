module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({

  	copy:{
  		custom:{
  		  files:[
  			  {
  			  expand: true,
  			  src: [
  				  './dist/**', './dist/**/*',
  			  ],
  			  dest: '../../../sites/alsace_nyc/wp-content/themes/ng2/',
  			},
        {
          expand: true,
          src: [
            'functions.php','index.php','style.css',
          ],
          dest: '../../../sites/alsace_nyc/wp-content/themes/ng2/',
          filter: 'isFile',
        },
        {
          expand: true,
          src: [
            '../../../sites/alsace_nyc/wp-content/themes/ng2/dist/assets/**',
          ],
          dest: '../../../sites/alsace_nyc/assets/**'
        }
  		  ]
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};
