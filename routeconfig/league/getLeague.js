'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const League = require('../../models').League;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const league = request.params;

    League.findById(league.id).populate('match').exec(function(err, league) {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply(league);
      }
    }); 
  
  },
  description: 'Get a single League',
  notes: 'Get a single League',
  tags: ['api', 'league', 'get', 'single']
};

module.exports = routeConfig;
