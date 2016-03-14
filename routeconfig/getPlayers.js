'use strict';

const Joi = require('joi');
const routeConfig = {
  pre: [],
  handler: function(request, reply) {
   reply({name:'Nate'})
  },
  description: 'Get a list of players',
  notes: 'Get a list of players',
  tags: ['api', 'players'],
  validate: {
    query: Joi.object({
      'name': Joi.string()
    })
  }
};

module.exports = routeConfig;
