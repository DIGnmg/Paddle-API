'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const player = request.params;
    const payload = request.payload;
    
    Player.findByIdAndUpdate(player.id, { $set: payload}, (err, player) => {
      if (player) {
        return reply(player);
      } else {
        return reply(err);
      }
    })

  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players'],
  validate: {
    payload: {
      email: Joi.string(),
      password: Joi.string(),
      profile:{
        firstName: Joi.string(),
        lastName: Joi.string(),
        tagName: Joi.string()
      },
      isAdmin: Joi.boolean()
    }
  }
};

module.exports = routeConfig;