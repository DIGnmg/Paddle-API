'use strict';

const Hapi = require('hapi');
const Bcrypt = require('bcrypt-nodejs');
const Basic = require('hapi-auth-basic');
const CookieAuth = require('hapi-auth-cookie');

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

const  cookieValidate = function (request, session, callback) {

    cache.get(session.sid, (err, cached) => {

        if (err) {
            return callback(err, false);
        }

        if (!cached) {
            return callback(null, false);
        }

        return callback(null, true, cached.account);
});

let cookieAuth = function (server, options, next) {
    const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
    server.app.cache = cache;
    
    server.auth.strategy('base', 'cookie', {
      password: 'supersecretpassword', // cookie secret
      cookie: 'app-cookie', // Cookie name
      ttl: 24 * 60 * 60 * 1000, // Set session to 1 day
      validateFunc: cookieValidate
    });
    return next();
};

cookieAuth.attributes = {
    name: 'auth-cookie',
    version: '1.0.0'
};

let simpleAuth = function (server, options, next) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    return next();
};

simpleAuth.attributes = {
    name: 'auth',
    version: '1.0.0'
};

const plugins = [CookieAuth, cookieAuth, Players, Matches, GameTypes, Leagues];
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
