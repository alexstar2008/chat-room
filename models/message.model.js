'use strict';
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    author: String,
    email: {
        type:String,
        required:true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,'Email is not valid']
    },
    text: {
        type:String,
        required:true,
        maxlength:[100,'Too large message']
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);