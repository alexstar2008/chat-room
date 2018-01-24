'use strict';

const router = require('express').Router();
const validate = require('express-validation');

const messageValidation = require('../config/validation/message.validation');
const messageController = require('../controllers/message.controller');

router.get('/list/:page',
    validate(messageValidation.getMessagesByPage), messageController.getMessagesByPage);

router.get('/single/:id',
    validate(messageValidation.getSingleMessage), messageController.getSingleMessage);

router.post('/',
    validate(messageValidation.addMessage), messageController.addMessage);

module.exports = router;