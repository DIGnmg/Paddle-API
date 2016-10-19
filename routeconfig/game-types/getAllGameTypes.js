'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const GameType = require('../../models').GameType;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {

    GameType.find({}, (err, game) => {
      if (err) return reply(err)
      return reply(game);
    });

  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players']
};

module.exports = routeConfig;
