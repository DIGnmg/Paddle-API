'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/players', config: require('../routeconfig/players/getAllPlayers')},
    {method: 'GET', path: '/players/{id}', config: require('../routeconfig/players/getPlayer')},
    {method: 'POST', path: '/players', config: require('../routeconfig/players/postPlayers')},
    {method: 'PUT', path: '/players/{id}', config: require('../routeconfig/players/updatePlayer')},
    {method: 'DELETE', path: '/players/{id}', config: require('../routeconfig/players/deletePlayer')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'players',
  version: require('../package.json').version
};
