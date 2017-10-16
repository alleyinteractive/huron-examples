// Plugin imports
const modules = require('postcss-modules');
const localClasses = require('./localClasses');

// Config
module.exports = (ctx) => {
  return {
    plugins: [
      modules({
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        scopeBehaviour: 'global', // use :local(.className) to produce a locally scoped class
        getJSON: localClasses,
      }),
    ],
  };
}
