'use strict';
const Message = require('../models/message.model');

function getMessagesByPage(req, res, next) {
    const MESSAGES_PER_PAGE = 10;
    const page = req.params.page;

    Message.find({}, null, { skip: page * MESSAGES_PER_PAGE, limit: MESSAGES_PER_PAGE }, function (err, messages) {
        if (err) {
            return next(err);
        }
        res.send(messages);
    });
}

function getSingleMessage(req, res, next) {
    const id = req.params && req.params.id;
    Message.findById(id, function (err, message) {
        if (err) {
            return next(err);
        }
        res.send(message);
    });
}

function addMessage(req, res, next) {
    const { author, email, text } = req.body;

    const message = new Message({
        author, 
        email, 
        text, 
        created_at: Date.now(),
        update_at: Date.now()
    });
    message.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('OK');
    });
}

const messageController = {
    getMessagesByPage,
    getSingleMessage,
    addMessage
};

module.exports = messageController;