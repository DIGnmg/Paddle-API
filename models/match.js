'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatchSchema = Schema({
        winner: { 
        	type: Schema.Types.ObjectId,
		    ref: 'Player' 
		},
        loser: { 
            type: Schema.Types.ObjectId,
		    ref: 'Player' 
		},
        gameType: { 
        	type: Schema.Types.ObjectId, 
        	ref: 'Game' 
        },
        players: [{
            type: Schema.Types.ObjectId,
            ref: 'Player' 
        }],
        dateTime: { type: Date, default: Date.now }
    });

module.exports = mongoose.model('Match', MatchSchema);