const config = require('./webpack.common.config');

config.plugins[0].userOptions.baseUrl = 'http://localhost:8080/logos';

module.exports = config;
