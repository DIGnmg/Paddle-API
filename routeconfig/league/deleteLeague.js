'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const League = require('../../models').League;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const league = request.params;

    League.findByIdAndRemove(league.id, function(err, league) {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply('Removed League');
      }
    });
  
  },
  description: 'Create a League',
  notes: 'Create a League',
  tags: ['api', 'league', 'create']
};

module.exports = routeConfig;
