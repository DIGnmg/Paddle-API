'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/players', config: require('../routeconfig/getPlayers')},
  ]);

  return next();
};

exports.register.attributes = {
  name: 'paddle-api',
  version: require('../package.json').version
};
