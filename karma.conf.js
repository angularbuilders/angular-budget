// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-diff-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],

    // Triger
    autoWatch: true,
    restartOnFileChange: true,
    singleRun: false,

    // Build
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // Run
    port: 9876,
    browsers: ['ChromeHeadless'],

    // Report
    colors: true,
    logLevel: config.LOG_INFO,
    reporters: ['jasmine-diff', 'mocha'],
    mochaReporter: {
      showDiff: true,
      output: true,
      ignoreSkipped: true,
      colors: {
        success: 'green',
        info: 'blue',
        warning: 'orange',
        error: 'red',
      },
      symbols: {
        success: '✓',
        info: 'i',
        warning: '⚠',
        error: 'X',
      },
    },
    jasmineDiffReporter: {
      color: {
        expectedBg: 'bgGreen',
        expectedWhitespaceBg: 'bgGreen',
        actualBg: 'bgRed',
        actualWhitespaceBg: 'bgRed',
      },
    },

    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },

    // Coverage
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angular-budget'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
  });
};
