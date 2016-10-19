'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const League = require('../../models').League;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const newLeague = request.params;
    const payload = request.payload;
    
    League.findByIdAndUpdate(newLeague.id, { $set: payload}, (err, newLeague) => {
      if (newLeague) {
        return reply(newLeague);
      } else {
        return reply(err);
      }
    })
  
  },
  description: 'Update a League',
  notes: 'Update a League',
  tags: ['api', 'league', 'update'],
  validate: {
    payload: {
      leagueName: Joi.string(),
      leagueType: Joi.string(),
      leagueLength: Joi.number(),
      leagueDescription: Joi.string(),
      players: Joi.array()
    }
  }
};

module.exports = routeConfig;
