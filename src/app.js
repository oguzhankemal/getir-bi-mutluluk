const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;

mongoose.connect(connectionString, { useNewUrlParser: true});
const connection = mongoose.connection;
if (!connection) {
    console.error('Error: Db connection error. : ')
}
const app = express();

const router = require('./routes/record');
require('./middleware')(app);
app.use(router);

module.exports = app;