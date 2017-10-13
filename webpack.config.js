var path = require('path');

module.exports = {
	entry: {
		index: './index.js'
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
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
}