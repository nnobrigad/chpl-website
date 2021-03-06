module.exports = function(config){
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-animate/angular-animate.min.js',
            'app/bower_components/ngstorage/ngStorage.min.js',
            'app/bower_components/jquery/dist/jquery.min.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
            'app/bower_components/angular-smart-table/dist/smart-table.min.js',
            'app/bower_components/angular-loading-bar/build/loading-bar.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/ngstorage/ngStorage.js',
            'app/bower_components/jquery/dist/jquery.min.js',
            'app/bower_components/angular-smart-table/dist/smart-table.min.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'app/common/swagger-ui.min.js',
            'app/bower_components/angular-sanitize/angular-sanitize.min.js',
            'app/bower_components/ng-csv/build/ng-csv.min.js',
            'app/bower_components/angulartics/dist/angulartics.min.js',
            'app/bower_components/angulartics/dist/angulartics-debug.min.js',
            'app/bower_components/angulartics-ga/dist/angulartics-ga.min.js',
            'app/bower_components/angulartics-gtm/dist/angulartics-gtm.min.js',
            'app/bower_components/angular-google-chart/ng-google-chart.js',
            'app/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
            'app/bower_components/ng-idle/angular-idle.min.js',
            'app/bower_components/angular-confirm-modal/angular-confirm.js',
            'app/app.js',
            'app/app_test.js',
            'app/appDev.js',
            'app/**/*Module.js',
            'app/common/**/*.js',
            'app/admin/**/*.js',
            'app/compare/**/*.js',
            'app/login/**/*.js',
            'app/nav/**/*.js',
            'app/product/**/*.js',
            'app/resources/**/*.js',
            'app/search/**/*.js',
            'app/overview/**/*.js',
            'app/registration/**/*.js',
            'app/**/components/*.html'
        ],

        preprocessors: {
            'app/common/**/!(*test|swagger*).js': ['coverage'],
            'app/compare/**/!(*test).js': ['coverage'],
            'app/login/**/!(*test).js': ['coverage'],
            'app/nav/**/!(*test).js': ['coverage'],
            'app/admin/**/!(*test).js': ['coverage'],
            'app/product/**/!(*test).js': ['coverage'],
            'app/resources/**/!(*test).js': ['coverage'],
            'app/search/**/!(*test|*cert*).js': ['coverage'],
            'app/overview/**/!(*test).js': ['coverage'],
            'app/registration/**/!(*test).js': ['coverage'],
            'app/app.js': ['coverage'],
            'app/**/components/*.html': ['ng-html2js']
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-growl-reporter',
            'karma-coverage',
            'karma-ng-html2js-preprocessor',
            'karma-htmlfile-reporter'
        ],

        reporters: ['dots', 'junit', 'coverage', 'growl', 'html'],

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
            subdir: '.',
            file: 'coverage.lcov'
        },

        htmlReporter: {
            outputFile: 'test_reports/units.html'
        },

        junitReporter: {
            outputDir: 'test_reports',
            suite: 'unit'
        }
    });
};
