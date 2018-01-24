'use strict';
const Joi = require('joi');

module.exports = {
    getMessagesByPage: {
        params: {
            page: Joi.number().min(0).default(0)
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
            email: Joi.string().email(),
            text: Joi.string().required().max(100)
        }
    }
}