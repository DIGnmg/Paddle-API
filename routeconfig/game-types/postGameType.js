'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const GameType = require('../../models').GameType;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const gameType = new GameType(request.payload);
    
    GameType.findOne(request.payload, (err, game) => {
      if (game) {
        return reply('Game Type already created')
      } else {
        gameType.save((err) => {
          if (err) return reply(err)
          return reply('Created New Game Type');
        });
      }
    })

  },
  description: 'Create a Game Type',
  notes: 'Create a Game Type',
  tags: ['api', 'game', 'type'],
  validate: {
    payload: {
      gameTypeName: Joi.string().required(),
      gameTypeDescription: Joi.string().required()
    }
  }
};

module.exports = routeConfig;
