'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'GET', path: '/leagues', config: require('../routeconfig/league/getAllLeagues')},
    {method: 'GET', path: '/leagues/{id}', config: require('../routeconfig/league/getLeague')},
    {method: 'POST', path: '/leagues', config: require('../routeconfig/league/createLeague')},
    {method: 'PUT', path: '/leagues/{id}', config: require('../routeconfig/league/updateLeague')},
    {method: 'DELETE', path: '/leagues/{id}', config: require('../routeconfig/league/deleteLeague')}
  ]);

  return next();
};

exports.register.attributes = {
  name: 'leagues',
  version: require('../package.json').version
};
