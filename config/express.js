'use strict';

const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes/index');

const app = express();
//middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route
app.use('/api', routes);

//error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json(err);
});


module.exports = app;
