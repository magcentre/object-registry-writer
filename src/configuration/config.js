const { setConfig } = require('@magmods/configuration');

const pack = require('../../package.json');

const DEFAULT_CONFIG_VERSION = '2020-05-07';

/**
 *
 * Finance Configuration.
 *
 * @function config
 * @return {object} configuration - Server configuration.
 * @description The following environment variables are needed to configure Bank Account:
 *
 * | Env variable name | Description | Default | Comments |
 * | ----------------- | ----------- | ------- | -------- |
 * | TABLE_NAME_USER_ACCOUNT    | Table for User Accounts   | useraccounts   | on mongo |
 * | TABLE_NAME_OBJECT_REGISTRY | Table for Object Registry | objectregistry | on mongo |
 * | X Component Description    | Description               |
 * | Limit for requests         | Description               | 100            |

 *
 * These values are on top of what is needed in the [configuration] mag center library.
 *
 * The api is in [swaggerhub](https://app.swaggerhub.com/apis)
 
 */
module.exports = (() => {
  const configuration = setConfig(pack, {
    mockProfiles: process.env.USE_MOCK_PROFILES === 'yes',
  });

  return configuration;
})();
