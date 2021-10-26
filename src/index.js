const app = require('express')();

const init = require('@makosmods/init');

const config = require('./configuration/config');

init(app, __dirname, config)
    .then((e) => {
        console.log("Application started on port ", config.port);
    });