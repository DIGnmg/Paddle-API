'use strict';

module.exports = function (){
  this.Player.findAll().then(result => {
    return result;
  });
}
