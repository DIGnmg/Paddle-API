'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GameTypeSchema = Schema({
        gameTypeName: { type:String, default: '' },
        gameTypeDescription: { type:String, default: '' },
        pointLimit: {type: Number, default: 0 },
        league: [{
        	type: Schema.Types.ObjectId,
            ref: 'League'
        }],
        dateTime: { type: Date, default: Date.now }
    });

module.exports =  mongoose.model('GameType', GameTypeSchema);