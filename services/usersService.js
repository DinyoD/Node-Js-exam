
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config')

const register = async ({username, password}) => {

    if (!username || !password) {
        throw { error: 'Username and Password are required!'}
    }

    const user = new User({username, password});   
    return await user.save();
}

const login = async ({username, password}) => {

    const user = await User.findOne({username: username});

    if (!user) {
        throw {error: 'User not found!'}
    }

    let match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw {error: 'Wrong password!'}
    }

    let token = jwt.sign({_id: user._id, username }, SECRET);
    return token;
}

module.exports = {
    register,
    login,
}