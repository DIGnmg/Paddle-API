'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const League = require('../../models').League;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const newLeague = new League(request.payload);
    
    League.findOne(request.payload, (err, league) => {
      if (league) {
        return reply('League already created')
      } else {
        newLeague.save((err) => {
          if (err) return reply(err)
          return reply('Created New League');
        });
      }
    })
  
  },
  description: 'Create a League',
  notes: 'Create a League',
  tags: ['api', 'league', 'create'],
  validate: {
    payload: {
      leagueName: Joi.string().required(),
      leagueType: Joi.string().required(),
      leagueLength: Joi.number().required(),
      leagueDescription: Joi.string().required(),
      players: Joi.array()
    }
  }
};

module.exports = routeConfig;
