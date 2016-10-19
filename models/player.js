'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

let PlayerSchema = Schema({
        email: { type:String, unique : true, lowercase:true ,default: ''},
        password: { type:String, default: ''},
        profile:{
            firstName: { type:String, default: ''},
            lastName: { type:String, default: ''},
            tagName: { type:String, default: ''}, 
            numberOfMatches: { type:Number, default: 0 },
            totalLosses: { type:Number, default: 0 },
            totalWins: { type:Number, default: 0 },
            rank: { type:Number, default: 0 }
        },
        isAdmin: { type:Boolean, default: false},
        dateCreated: { type: Date, default: Date.now },
        matches:[{
            type: Schema.Types.ObjectId,
            ref: 'Match'
        }],
        league: [{ 
            type: Schema.Types.ObjectId,
            ref: 'League'
        }]
    });

PlayerSchema.pre('save', function (next) {
    let player = this;

    // check if password was modified
    if (!player.isModified('password')) return next();

    // Gen Salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(player.password, salt, null, function (err, hash) {
             if (err) return next(err);
             player.password = hash;
             next();
        });
    });
});

PlayerSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports =  mongoose.model('Player', PlayerSchema);