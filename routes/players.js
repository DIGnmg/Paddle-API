'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/players', config: require('../routeconfig/players/getAllPlayers')},
    {method: 'GET', path: '/players/{id}', config: require('../routeconfig/players/getPlayer')},
    {method: 'POST', path: '/players', config: require('../routeconfig/players/postPlayers')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'players',
  version: require('../package.json').version
};
