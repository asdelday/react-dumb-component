// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html

require('babel-register');

module.exports = function karmaConf(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    reporters: ['spec', 'coverage'],
    files: ['src/**/*.spec.*'],
    preprocessors: {
      'src/**/*.spec.*': ['webpack', 'sourcemap'],
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html',
    },
    webpack: require('./webpack.config.babel'),
    webpackMiddleware: { noInfo: true },
  });
};
