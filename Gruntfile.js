module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            src: ['src'],
            dist: ['dist']
        },
        watch: {
            options: {
                livereload: true
            },
            configFiles: {
                files: [ 'Gruntfile.js', 'config/*.js' ],
                options: {
                    reload: true
                }
            },
            sass: {
                files: '<%= project.src %>/css/*.scss',
                tasks: ['sass']
            },
            html: {
                files: '<%= project.src %>/*.html',
                tasks: ['copy']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= project.src %>/css/',
                        src: ['*.scss'],
                        dest: '<%= project.dist %>/css',
                        ext: '.css'
                    }
                ]
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= project.src %>/*.html'],
                        dest: '<%= project.dist %>/',
                        filter: 'isFile'
                    }
                ]
            }
        },
        clean: [
            '<%= project.dist %>'
        ]
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default', ['clean', 'sass', 'copy']);
}