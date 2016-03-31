'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = Schema({
        firstName: { type:String, default: ''},
        lastName: { type:String, default: ''},
        numberOfMatches: { type:Number, default: 0 },
        totalLosses: { type:Number, default: 0 },
        totalWins: { type:Number, default: 0 },
        rank: { type:Number, default: 0 },
        dateCreated: { type: Date, default: Date.now },
        matches:[{
            type: Schema.Types.ObjectId,
            ref: 'Match'
        }],
        league: { 
            type: Schema.Types.ObjectId,
            ref: 'League'
        }
    });

module.exports =  mongoose.model('Player', PlayerSchema);