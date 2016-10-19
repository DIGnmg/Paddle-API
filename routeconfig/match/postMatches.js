'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Match = require('../../models').Match;
const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const match = request.payload;
    const players = request.payload.players;

    Match.create(match, (err, match) => {
      if (err != null) {
        return reply('There was an Error!', err);
      } else {
        players.forEach((player)=>{
          Player.update({
            _id: player._id
          }, {
            $push: {
              matches: match._id
            }
          }, (err, numberAffected, raw) => {
            if (err != null) {

            } else {
              return reply(match);
            }
          });
        })
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
      gameType: Joi.string().required(),
      players: Joi.array().required()
    }
  }
};

module.exports = routeConfig;
