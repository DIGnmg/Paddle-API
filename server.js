'use strict';

const Hapi = require('hapi');

//Plug-ins
const Players = require('./routes/players.js');
const Matches = require('./routes/matches.js');
const GameTypes = require('./routes/gameTypes.js');

//Database
const db = require('./adapters/db.js')

const plugins = [Players, Matches, GameTypes];

const server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ port: 3000 });
server.app.db = db.mongoose;


server.register(plugins, (err) => {
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
