const express = require('express');
const setupExpress = require('./config/express')
const mongoose = require('./config/mongoose');
const config = require('./config');
const router = require('./router');


const app = express();
setupExpress(app);
mongoose(app);

app.use(router);


//TODO routes, mongoose, error handler

app.listen(config.PORT, () => console.log(`Server is  listening on port: ${config.PORT}`));