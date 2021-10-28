const app = require('express')();

const { initDatabase } = require('@makosmods/sequelize-helper');

const path = require('path');

const init = require('@makosmods/init');

const config = require('./configuration/config');

initDatabase( { ...config.database } , path.join(__dirname, 'model'))
    .then((e) => init(app, __dirname, config))
    .then((e) => {
        console.log("Application started on port ", config.port);
    })
    .catch((e) => {
        console.log("Failed to start service", e);
    });