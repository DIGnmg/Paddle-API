'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameTypeSchema = Schema({
        gameTypeName: { type:String, default: '' },
        gameTypeDescription: { type:String, default: '' },
        dateTime: { type: Date, default: Date.now }
    });

module.exports =  mongoose.model('GameType', GameTypeSchema);