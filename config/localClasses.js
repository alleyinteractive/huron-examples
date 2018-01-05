const path = require('path');
const fs = require('fs-extra');

module.exports = function localClasses(cssFileName, json) {
  const cssFileInfo = path.parse(cssFileName);
  const jsonFileName  = path.join(__dirname, '../dist/css/classNames', `${cssFileInfo.name}.json`);
  fs.outputFileSync(jsonFileName, JSON.stringify(json));
}
