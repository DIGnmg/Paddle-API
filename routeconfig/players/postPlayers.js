'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const player = new Player(request.payload);
    
    Player.find(request.payload, (err, player) =>{
      if (player) {
        return reply('Player already created')
      } else {
        player.save((err) => {
          if (err) return reply(err)
          return reply('Created New Player');
        });
      }
    })
  
  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players'],
  validate: {
    payload: {
      firstName: Joi.string().required()
    }
  }
};

module.exports = routeConfig;
