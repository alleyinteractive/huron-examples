/*eslint-disable*/


var store = require('./huron-store');
var InsertNodes = require('./insertNodes').default;
var sectionTemplate = require('./section.hbs');
var assets = require.context('../partials', true, /\.html|\.json|\.hbs$/);
var modules = {};

modules['./huron-assets/section.hbs'] = sectionTemplate;

assets.keys().forEach(function(key) {
  modules[key] = assets(key);
});

var insert = window.insert ? window.insert :
  new InsertNodes(modules, store);
window.insert = insert;

if (module.hot) {
  // Hot Module Replacement for huron components (json, hbs, html)
  module.hot.accept(
    assets.id,
    () => {
      var newAssets = require.context(
        '../partials',
        true,
        /\.html|\.json|\.hbs$/
      );
      var newModules = newAssets.keys()
        .map((key) => {
          return [key, newAssets(key)];
        })
        .filter((newModule) => {
          return modules[newModule[0]] !== newModule[1];
        });

      updateStore(require('./huron-store.js'));

      newModules.forEach((module) => {
        modules[module[0]] = module[1];
        hotReplace(module[0], module[1], modules);
      });
    }
  );

  // Hot Module Replacement for sections template
  module.hot.accept(
    './section.hbs',
    () => {
      var newSectionTemplate = require('./section.hbs');
      modules['./huron-assets/section.hbs'] = newSectionTemplate;
      hotReplace(
        './huron-assets/section.hbs',
        newSectionTemplate,
        modules
      );
    }
  );

  // Hot Module Replacement for data store
  module.hot.accept(
    './huron-store.js',
    () => {
      updateStore(require('./huron-store.js'));
    }
  );
}

function hotReplace(key, module, modules) {
  insert.modules = modules;
  if (key === store.sectionTemplatePath) {
    insert.cycleSections();
  } else {
    insert.inserted = [];
    insert.loadModule(key, module, false);
  }
};

function updateStore(newStore) {
  insert.store = newStore;
}



/*eslint-enable*/
