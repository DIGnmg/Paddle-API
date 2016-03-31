'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Match = require('../../models').Match;
const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const match = request.params;

    Match.findByIdAndRemove(match.id, function(err, match) {
      if (err) {
        return reply('there was an error', err)
      } else {
        return reply('Removed Match');
      }
    });

  },
  description: 'delete a match',
  notes: 'Delete a match',
  tags: ['api', 'match', 'delete']
};

module.exports = routeConfig;
