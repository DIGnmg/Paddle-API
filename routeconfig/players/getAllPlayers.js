'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');
const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {

    Player.find({}, (err, players) => {
      if (err) return reply(err)
      return reply(players);
    });

  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players']
};

module.exports = routeConfig;
