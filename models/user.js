const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

userSchema.pre('save', function (next){
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
            next(err);
        }

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                next(err);
            }
            this.password = hash;
            next();
        });
    })
});

module.exports = mongoose.model('User', userSchema);