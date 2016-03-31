'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeagueSchema = Schema({
        leagueDescription: { type:String, default: ''},
        leagueCreatedDate: { type: Date, default: Date.now }
    });

module.exports =  mongoose.model('League', LeagueSchema);