'use strict';

module.exports = {
  src: 'lib/**/*',
  dist: 'dist',
  build: 'build',

  browser: {
    bundleName: 'marsdb.localStorage.js',
    bundleMinName: 'marsdb.localStorage.min.js',
    entry: 'index.js',
    entryTests: 'browser_tests.js',
  }
};
