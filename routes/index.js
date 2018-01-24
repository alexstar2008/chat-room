'use strict';

const router = require('express').Router();
const messagesRouter = require('./messages');

router.use('/messages',messagesRouter);


module.exports = router;