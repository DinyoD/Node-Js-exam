const express = require('express');
const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];
const setupExpress = require('./config/express')


const app = express();
setupExpress(app);

//TODO routes, mongoose, error handler

app.listen(config.PORT, () => console.log(`Server is  listening on port: ${config.PORT}`));