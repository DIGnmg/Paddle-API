'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Match = require('../../models').Match;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const match = request.params;
    
    Match.findById(match.id).populate('players').exec(function(err, match) {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply(match);
      }
    });  
  },
  description: 'Create a match',
  notes: 'Create a match',
  tags: ['api', 'match']
};

module.exports = routeConfig;
