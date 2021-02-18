const mongoose = require('mongoose');
const { DB_CONNECTION } = require('../config');

module.exports = (app) => {
    mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error!'));
    db.on('open', console.log.bind(console, 'Db connected!'));

    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
}
