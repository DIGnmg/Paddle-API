'use strict';

const Hapi = require('hapi');
const Bcrypt = require('bcrypt-nodejs');
const Basic = require('hapi-auth-basic');

//Database
const db = require('./adapters/db.js');

//Plug-ins
const Players = require('./routes/players.js');
const Matches = require('./routes/matches.js');
const GameTypes = require('./routes/gameTypes.js');
const Leagues = require('./routes/leagues.js');

const server = new Hapi.Server({ debug: { request: ['error'] } });
server.connection({ port: 5000 });
server.app.db = db.mongoose;

const validate = function (request, username, password, callback) {

    const user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, (err, isValid) => {

        callback(err, isValid, { id: user.id, name: user.name });
    });
};

let simpleAuth = function (server, options, next) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    return next();
};

simpleAuth.attributes = {
    name: 'auth',
    version: '1.0.0'
};

const plugins = [Basic, simpleAuth, Players, Matches, GameTypes, Leagues];
server.register(plugins, (err) => {
  
  if (err) {
    console.log('Error loading plugins: ' + err)
  } else {
  	console.log('Hi')
  }

});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
