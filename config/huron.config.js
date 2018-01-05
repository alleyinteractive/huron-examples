/**
 * The Huron configuration file.
 */

// Requires
const path = require('path');
const fs = require('fs');

/**
 * A configuration object for your Huron settings.
 * For a detailed explanation,
 * @see  https://github.com/alleyinteractive/huron/blob/master/config/README.md
 */
module.exports = {
  entry: 'main',
  css: ['vendor/css/vendor-styles.css'],
  js: ['vendor/js/vendor-script.js'],
  assets: fs.readdirSync(path.join(__dirname, '../src/images'))
    .map((file) => path.join('src/images', file)),
  kss: 'src/scss',
  kssExtension: '.scss',
  kssOptions: {
    multiline: true,
    markdown: true,
    custom: ['data'],
  },
  output: 'partials',
  port: 8080,
  prototypes: ['sample'],
  root: 'dist/prototype',
  classNames: path.join(__dirname, '../dist/css/classNames'),
  templates: {
    rule: {
      test: /\.(hbs|handlebars)$/,
      use: 'handlebars-loader',
    },
    extension: '.hbs',
  },
  window: {},
};

