const path = require('path');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: path.join(__dirname, '../../src/app.js'),
  },
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '../../dist'),
  },
};

module.exports = config;
