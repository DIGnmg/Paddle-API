'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LeagueSchema = Schema({
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