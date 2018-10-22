//Language Resources Management Server-side Application
//Created by Prathiksha Singh
//Final Update Date: 22/10/2018

'use strict';
//calling all required libraries/packages
var loopback = require('loopback');
var boot = require('loopback-boot');

//export all models, under common file, to the REST API
var app = module.exports = loopback();

//code to gnerate a Node.js Server as the specified IP address and port number in the config.json file
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap - to mount APIs and sub-apps
boot(app, __dirname, function(err) {
  if (err) throw err;
  if (require.main === module)
    app.start();
});
