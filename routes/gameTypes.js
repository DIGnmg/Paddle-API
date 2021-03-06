'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
  	{method: 'GET', path: '/gametype', config: require('../routeconfig/game-types/getAllGameTypes')},
  	{method: 'GET', path: '/gametype/{id}', config: require('../routeconfig/game-types/getGameType')},
    {method: 'POST', path: '/gametype', config: require('../routeconfig/game-types/postGameType')},
    {method: 'PUT', path: '/gametype/{id}', config: require('../routeconfig/game-types/updateGameType')},
    {method: 'DELETE', path: '/gametype/{id}', config: require('../routeconfig/game-types/deleteGameType')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'gameTypes',
  version: require('../package.json').version
};
