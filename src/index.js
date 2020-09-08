require('dotenv').config(); // try to use console.log(require('dotenv')); to see if you file is ok. Or you can use { path: 'path .env' }

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({
        Info: 'This is an API model made in javaScript and using a postgreSQL database',
        Obs: '...',
        Documentation: '...',
        Port: `APP running on port ${port}.`
    });
});

require('./app/controller/index')(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
