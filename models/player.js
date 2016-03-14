var Player = sequelize.define('player', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Player.sync({force: true}).then(function () {
  // Table created
  return Player.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
