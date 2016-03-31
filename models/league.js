'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeagueSchema = Schema({
		leagueName: { type: String, default: ''},
        leagueType: { type: String, default: ''},
        leagueDescription: { type: String, default: ''},
        leagueLength: { type: Number, default: 0},
        leagueCreatedDate: { type: Date, default: Date.now },
        players: [{
        	type: Schema.Types.ObjectId,
            ref: 'Player'
        }]
    });

module.exports =  mongoose.model('League', LeagueSchema);