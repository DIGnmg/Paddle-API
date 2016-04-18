'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');
const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const player = request.params;

    Player.findById(player.id).populate('match').exec(function(err, player) {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply(player, request.auth.credentials.name);
      }
    }); 

  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players']
};

module.exports = routeConfig;
