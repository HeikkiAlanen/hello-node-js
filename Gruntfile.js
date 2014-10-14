/*
	Grunt needs to be installed globally before grunt can be used. (`npm install -g grunt`)
	Linting from command line with grunt: `grunt --gruntfile=grunt-conparison.js`
	Grunt executes 'default'-task which is defined as eslint.
*/
module.exports = function(grunt) {

    grunt.initConfig({
		eslint: {
			options: {
				config: 'eslintRulesHAl.json'
			},
			target: ['*.js']
		},
		nodeunit: {
			all: ['./test/*_spec.js']
		}
	});
  
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('default', ['eslint']);
  grunt.registerTask('test', ['nodeunit', 'eslint']);
  };
