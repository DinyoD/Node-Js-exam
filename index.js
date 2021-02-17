const express = require('express');
const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];
const setupExpress = require('./config/express')

const content = [
    {
        title: 'Title 1',
        number: 1,
    },
    {
        title: 'Title 12',
        number: 12,
    },
    {
        title: 'Title 123',
        number: 123,
    },
]
const app = express();
setupExpress(app);

app.get('/', (req, res) => {
    res.render('home', { content });
})

//TODO routes, mongoose, error handler

app.listen(config.PORT, () => console.log(`Server is  listening on port: ${config.PORT}`));