'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/matches', config: require('../routeconfig/match/getAllMatches')},
    {method: 'GET', path: '/matches/{id}', config: require('../routeconfig/match/getMatch')},
    {method: 'POST', path: '/matches', config: require('../routeconfig/match/postMatches')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'matches',
  version: require('../package.json').version
};
