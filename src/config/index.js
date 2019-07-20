const _ = require('lodash');

const config = {
  dev: 'dev',
  prod: 'prod',
  port: process.env.PORT || 3000,
};

//Get config type from environment. If it is null, set it to development
process.env.ENVIRONMENT = process.env.ENVIRONMENT || config.dev;
config.env = process.env.ENVIRONMENT;

let environmentConfig;
try {
    environmentConfig = require(`./${config.env}`);
    environmentConfig = environmentConfig || {};
} catch (e) {
    environmentConfig = {};
}
module.exports = _.merge(config, environmentConfig);
