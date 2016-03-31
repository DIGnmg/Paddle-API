'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const GameType = require('../../models').GameType;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const gameType = request.params;

    GameType.findByIdAndRemove(gameType.id, (err, gameType) => {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply('Removed Game Type');
      }
    })

  },
  description: 'Delete a Game Type',
  notes: 'Delete a Game Type',
  tags: ['api', 'game', 'type', 'delete']
};

module.exports = routeConfig;
