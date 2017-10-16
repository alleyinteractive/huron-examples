/**
 * The Huron configuration file.
 */

// Requires
path = require('path');

/**
 * A configuration object for your Huron settings.
 * For a detailed explanation,
 * @see  https://github.com/alleyinteractive/huron/blob/master/config/README.md
 */
module.exports = {
  css: [],
  entry: 'index',
  js: [],
  kss: 'scss',
  kssExtension: '.scss',
  kssOptions: {
    multiline: true,
    markdown: true,
    custom: ['data'],
  },
  output: 'partials',
  port: 8080,
  prototypes: ['sample'],
  root: 'static/prototype',
  classNames: path.join(__dirname, 'static/css/classNames'),
  templates: {
    rule: {
      test: /\.(hbs|handlebars)$/,
      use: 'handlebars-loader',
    },
    extension: '.hbs',
  },
  window: {},
};

