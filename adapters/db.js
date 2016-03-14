'use strict';

const initializeKnex = require('knex');
const config = require('../../infrastructure').config;

const dbConfig = {
  client: config.database.client,
  debug: config.database.debug
};

// adding `connection` allows for mocking
// without trying to actually connect first
if (config.database.host !== '') {
  dbConfig.connection = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
    charset: 'utf8'
  };
}

const knex = initializeKnex(dbConfig);

function destroyConnectionPool(callback) {
  if (knex && knex.client) {
    knex.destroy(callback);
  }
  else {
    callback();
  }
}

module.exports = {
  knex: knex,
  destroyConnectionPool: destroyConnectionPool
};