'use strict';

var _huronStore = require('./huron-store');

var _huronStore2 = _interopRequireDefault(_huronStore);

var _insertNodes = require('./insertNodes');

var _insertNodes2 = _interopRequireDefault(_insertNodes);

var _section = require('./section.hbs');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable */

const assets = require.context('../partials', true, /\.html|\.json|\.hbs$/); /* globals requirePath, requireRegex, sectionTemplatePath */

// NOTE: This is not a normal JS file! It is pulled in by the CLI as a string
// and prepended to the browser script after replacing anything referenced via `hotScope[variable]`
// with CLI arguments or config properties passed in by the user.

/* eslint-disable */

const modules = {};

modules['/Users/owen/www/huron/templates/section.hbs'] = _section2.default;

assets.keys().forEach(key => {
  modules[key] = assets(key);
});

const insert = new _insertNodes2.default(modules, _huronStore2.default);

if (module.hot) {
  // Hot Module Replacement for huron components (json, hbs, html)
  module.hot.accept(assets.id, () => {
    const newAssets = require.context('../partials', true, /\.html|\.json|\.hbs$/);
    const newModules = newAssets.keys().map(key => [key, newAssets(key)]).filter(newModule => modules[newModule[0]] !== newModule[1]);

    updateStore(require('./huron-store.js')); // eslint-disable-line global-require, import/no-unresolved
    newModules.forEach(module => {
      modules[module[0]] = module[1];
      hotReplace(module[0], module[1], modules);
    });
  });

  // Hot Module Replacement for sections template
  module.hot.accept('./section.hbs', () => {
    const newSectionTemplate = require('./section.hbs'); // eslint-disable-line global-require, import/no-unresolved

    modules['/Users/owen/www/huron/templates/section.hbs'] = newSectionTemplate;
    hotReplace('./huron-assets/section.hbs', newSectionTemplate, modules);
  });

  // Hot Module Replacement for data store
  module.hot.accept('./huron-store.js', () => {
    updateStore(require('./huron-store.js')); // eslint-disable-line global-require, import/no-unresolved
  });
}

function hotReplace(key, module, newModules) {
  insert.modules = newModules;
  if (key === _huronStore2.default.sectionTemplatePath) {
    insert.cycleSections();
  } else {
    insert.inserted = [];
    insert.loadModule(key, module, false);
  }
}

function updateStore(newStore) {
  insert.store = newStore;
}