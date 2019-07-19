require('dotenv').config();
const config = require('./src/config');
const app = require('./src/app');

app.listen(config.port);
console.log(`Listening on http://localhost:${config.port}`);