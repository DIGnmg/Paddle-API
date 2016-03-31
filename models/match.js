'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MatchSchema = Schema({
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