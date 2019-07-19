const _ = require('lodash');

const config = {
  dev: 'dev',
  prod: 'prod',
  port: process.env.PORT || 3000,
};

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
