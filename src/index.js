const app = require('connect')();

const init = require('@magmods/init');

let config = require('./configuration/config');

init(app, __dirname, config, dbValidate, { preOps: [initialize] })
  .then((result) => {
    ({ config } = result);
  });

module.exports = app;
