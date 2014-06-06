module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            pager:{
                files: {
                    'dist/bootstrap-pager.min.js': ['dist/bootstrap-pager.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dist', ['uglify']);

    grunt.registerTask('default', ['dist']);

};