var path = require('path');

module.exports = {
  context: path.join(__dirname, '../src'),

	entry: {
		main: './js/index.js'
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'static'),
	},

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, './postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}