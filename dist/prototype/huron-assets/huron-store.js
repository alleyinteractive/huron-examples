module.exports = {"types":["template","data","description","section","prototype","sections-template"],"config":{"port":8080,"output":"partials","root":"dist/prototype","css":["vendor/css/vendor-styles.css"],"assets":["src/images/test-image.jpg"],"js":["vendor/js/vendor-script.js"],"kss":["src/scss"],"classNames":"/Users/owen/www/huron-examples/dist/css/classNames","window":{},"prototypes":["sample"],"entry":"main","kssOptions":{"multiline":true,"markdown":true,"custom":["data"],"header":true},"kssExtension":".scss","templates":{"rule":{"test":{},"use":"handlebars-loader","include":["/Users/owen/www/huron-examples/dist/prototype/partials"]},"extension":".hbs"},"sectionTemplate":"/Users/owen/www/huron/templates/section.hbs"},"classNames":{"index":{"sample-kss":"index__sample-kss___3WP4Q"}},"sections":{"sectionsByPath":{"/Users/owen/www/huron-examples/src/scss/_sample-kss.scss":{"header":"Sample partial","description":"<p>This is a sample element. Put the description here.</p>\n","deprecated":false,"experimental":false,"reference":"site.sample-kss","referenceNumber":"1.1","referenceURI":"site-sample-kss","weight":0,"markup":"sample-kss.hbs","source":{"filename":"","path":"","line":1},"modifiers":[],"parameters":[],"data":"sample-kss.json","kssPath":"/Users/owen/www/huron-examples/src/scss/_sample-kss.scss","dataPath":"./site-sample-kss-data.json","templatePath":"./site-sample-kss-template.hbs","templateContent":"<div class=\"{{classNames.index.sample-kss}}\">\n\t<h2 class=\"title\">{{title}}</h2>\n\t<p class=\"description\">\n\t\t{{description}}\n\t</p>\n\t{{#if image}}\n\t\t<img src=\"{{image}}\" alt=\"\">\n\t{{/if}}\n</div>\n","sectionPath":"./site-sample-kss-section.json","descriptionPath":"./site-sample-kss-description.html"}},"sectionsByURI":{"site-sample-kss":{"header":"Sample partial","description":"<p>This is a sample element. Put the description here.</p>\n","deprecated":false,"experimental":false,"reference":"site.sample-kss","referenceNumber":"1.1","referenceURI":"site-sample-kss","weight":0,"markup":"sample-kss.hbs","source":{"filename":"","path":"","line":1},"modifiers":[],"parameters":[],"data":"sample-kss.json","kssPath":"/Users/owen/www/huron-examples/src/scss/_sample-kss.scss","dataPath":"./site-sample-kss-data.json","templatePath":"./site-sample-kss-template.hbs","templateContent":"<div class=\"{{classNames.index.sample-kss}}\">\n\t<h2 class=\"title\">{{title}}</h2>\n\t<p class=\"description\">\n\t\t{{description}}\n\t</p>\n\t{{#if image}}\n\t\t<img src=\"{{image}}\" alt=\"\">\n\t{{/if}}\n</div>\n","sectionPath":"./site-sample-kss-section.json","descriptionPath":"./site-sample-kss-description.html"}},"sorted":{"site":{"sample-kss":{}}}},"templates":{"./site-sample-kss-data.json":"./site-sample-kss-template.hbs","./site-sample-kss-template.hbs":"./site-sample-kss-data.json"},"prototypes":{"prototype-sample":"./prototypes/prototype-sample-prototype.html"},"sectionTemplatePath":"./huron-assets/section.hbs","referenceDelimiter":"."}