'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const League = require('../../models').League;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const newLeague = new League(request.payload);
    
    League.find({}, (err, players) => {
      if (err) return reply(err)
      return reply(players);
    });
  
  },
  description: 'Get all Leagues',
  notes: 'Get all Leagues',
  tags: ['api', 'league', 'get', 'all']
};

module.exports = routeConfig;
