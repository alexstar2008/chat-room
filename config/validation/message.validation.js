'use strict';
const Joi = require('joi');

module.exports = {
    getMessagesByPage: {
        params: {
            page: Joi.number().required().min(0)
        }
    },
    getSingleMessage: {
        params: {
            id: Joi.string().required()
        }
    },
    addMessage: {
        body: {
            author:Joi.string().default('Anonymous'),
            email: Joi.string().required().email(),
            text: Joi.string().required().max(100)
        }
    }
}