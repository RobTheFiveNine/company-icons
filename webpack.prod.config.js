const config = require('./webpack.common.config');

config.plugins[0].userOptions.baseUrl = 'https://raw.githubusercontent.com/RobTheFiveNine/company-icons/main/logos';

module.exports = config;
