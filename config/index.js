const env = process.env.NODE_ENV || 'dev';

// enter your DB name 
const dbName = 'test'

const config = {
    dev: {
        PORT: 5000,
        DB_CONNECTION: `mongodb://localhost/${dbName}`,
    },
    production: {

    }
}

module.exports = config[env];