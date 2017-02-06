path = require('path');

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
  templates: {
    rule: {
      test: /\.(hbs|handlebars)$/,
      use: 'handlebars-template-loader',
    },
    extension: '.hbs',
  },
  window: {},
};

