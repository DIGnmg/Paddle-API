'use strict';

exports.register = function(server, options, next) {
  server.bind(options);

  server.route([
    {method: 'POST', path: '/leagues', config: require('../routeconfig/league/createLeague')},
  ]);

  return next();
};

exports.register.attributes = {
  name: 'leagues',
  version: require('../package.json').version
};
