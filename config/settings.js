'use strict';

const db = {
    connectionString: process.env.MONGO_CONNECTION,
};

const server = {
    port: process.env.PORT || 3000
}

module.exports = { db,server };