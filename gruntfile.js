module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks("grunt-run")

	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['dist/src/**/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			files: [
				'Gruntfile.js',
				'package.json',
				'src/server.js',
				'lib/**/*.js',
				'src/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		eslint: {
			options: {
				configFile: ".eslintrc.json",
				fix: grunt.option("fix")
			},
			target: [
				'src/**/*.ts',
				'test/**/*.ts'
			]
		},
		watch: {
			files: [
				'src/**/*.ts',
				'test/**/*.ts',
				'!**/*.d.ts'
			], // files to watch
			tasks: (() => {
				let x = [
					'eslint'
				]

				x = grunt.option('test') ? [...x, 'run:test'] : x
				x = grunt.option('build') ? [...x, 'ts:build'] : x

				return x
			})(), // tasks to run
			options: {
				spawn: false // makes this task faster
			},
			configFiles: {
				files: ['gruntfile.js', 'config/*.js'],
				options: {
					reload: true
				}
			}
		},
		ts: {
			build: {
				tsconfig: './tsconfig.json'
			}
		},
		run: {
			test: {
				cmd: 'jest',
				args: [
					'--config',
					'jestconfig.json'
				]
			}
		}
	});

	grunt.registerTask("default", [
		"eslint",
		"run:test",
		"ts:build"
	]);

	grunt.registerTask("build", [
		"eslint",
		"ts:build"
	]);

	grunt.registerTask("lint", [
		"eslint"
	]);

	grunt.registerTask("test", [
		"run:test"
	]);
};