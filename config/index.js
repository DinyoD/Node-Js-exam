const env = process.env.NODE_ENV || 'dev';

// enter your DB name 
const dbName = 'test'

const config = {
    dev: {
        PORT: 5000,
        DB_CONNECTION: `mongodb://localhost/${dbName}`,
        SALT_ROUNDS: 10,
        SECRET: 'asdf15fds15fds742dfc',
    },
    production: {

    }
}

module.exports = config[env];