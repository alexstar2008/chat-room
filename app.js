'use strict';

const { port } = require('./config/settings').server;
const app = require('./config/express');
const db = require('./config/db');

db.once('open',function(){
    console.log('Database connected OK');
});
db.on('error',console.error.bind(console,`MongoDB connection error: `));

app.listen(port, (err) => {
    if (err) {
        return console.err(err);
    }
    console.log(`Server is listening on port: ${port}`);
});