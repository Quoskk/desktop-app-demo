import path from 'path';
import _ from 'lodash';

/* istanbul ignore next */
const requireProcessEnv = (name) => {
    if (!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
};

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    rootpath: path.join(__dirname, '..'),
    api: {
      protocol: process.env.API_PROTOCOL || 'http',
      uri: process.env.API_URI || '10.10.0.48',
      port: process.env.API_PORT || 8080,
      base: '/api'
    }
  },
  test: {

  },
  development: {

  },
  production: {
    api: {
      protocol: 'https'
    }
  }
};

module.exports = _.merge(config.all, config[config.all.env]);
