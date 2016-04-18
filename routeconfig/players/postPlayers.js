'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');

const Player = require('../../models').Player;

const routeConfig = {
  pre: [],
  handler: function(request, reply) {
    const newPlayer = new Player(request.payload);
    
    Player.findOne(request.payload, (err, player) =>{
      console.log(player);
      if (player) {
        return reply('Player already created')
      } else {
        newPlayer.save((err) => {
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
      email: Joi.string().required(),
      password: Joi.string().required(),
      profile:{
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        tagName: Joi.string().required()
      },
      isAdmin: Joi.boolean()
    }
  }
};

module.exports = routeConfig;
