'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const GameType = require('../../models').GameType;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const gameType = request.params;
    const payload = request.payload;

    GameType.findByIdAndUpdate(gameType.id, { $set: payload}, (err, gameType) => {
      if (gameType) {
        return reply(gameType);
      } else {
        return reply(err);
      }
    })

  },
  description: 'Update a Game Type',
  notes: 'Update a Game Type',
  tags: ['api', 'game', 'type', 'update'],
  validate: {
    payload: {
      gameTypeName: Joi.string().required(),
      gameTypeDescription: Joi.string().required()
    }
  }
};

module.exports = routeConfig;
