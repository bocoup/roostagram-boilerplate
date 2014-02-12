
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Load Grunt plugins.
  grunt.loadTasks('build');

  // Tasks.
  grunt.registerTask('setup-dev',
    'Prepare development environment',
    ['jshint', 'mocha', 'clean:prod', 'jade:dev', 'stylus:dev', 'connect:dev']);

  grunt.registerTask('dev',
    'Compile and start a dev webserver.',
    ['setup-dev', 'watch']);

  grunt.registerTask('test-integration',
    'Run integration tests in a real browser',
    ['setup-dev', 'mochaTest']);

  grunt.registerTask('prod',
    'Compile for production and start a test webserver.',
    ['clean:prod', 'jade:prod', 'stylus:prod', 'copy', 'requirejs', 'connect:prod']);

  grunt.registerTask('default', ['dev']);

};
