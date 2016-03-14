'use strict';

const Hapi = require('hapi');
const Players = require('./routes/players.js');

const server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ port: 3000 });

const plugins = [Players];

server.register(plugins, function(err) {
  if (err) {
    console.log('Error loading plugins: ' + err)
  } else {
    console.log('Error loading plugins: ' + err)
  }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
