'use strict';

const Hapi = require('hapi');

//Database
const db = require('./adapters/db.js');

//Plug-ins
const Players = require('./routes/players.js');
const Matches = require('./routes/matches.js');
const GameTypes = require('./routes/gameTypes.js');
const Leagues = require('./routes/leagues.js');

const plugins = [Players, Matches, GameTypes, Leagues];

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
