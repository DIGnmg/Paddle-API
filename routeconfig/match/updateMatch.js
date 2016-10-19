'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Match = require('../../models').Match;
const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const match = request.params;
    const payload = request.payload;

    Match.findByIdAndUpdate(match.id, { $set: payload}, (err, match) => {
      if (match) {
        return reply(match);
      } else {
        return reply(err);
      }
    })

  },
  description: 'Create a match',
  notes: 'Create a match',
  tags: ['api', 'matche'],
  validate: {
    payload: {
      winner: Joi.object(),
      loser: Joi.object(),
      gameType: Joi.string(),
      players: Joi.array()
    }
  }
};

module.exports = routeConfig;
