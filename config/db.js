'use strict';

const mongoose = require('mongoose');

const { connectionString } = require('./settings').db;


mongoose.connect(connectionString);

module.exports = mongoose.connection;

