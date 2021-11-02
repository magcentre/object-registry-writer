const app = require('express')();

const path = require('path');

const initServer = require('@magcentre/init');

const initMinio = require('@magcentre/minio-helper').initMinio;

const { initDatabase } = require('@magcentre/sequelize-helper');

const config = require('./configuration/config');

initDatabase( { ...config.database } , path.join(__dirname, 'model'))
    .then((e) => initMinio(config.minio))
    .then((e) => initServer(app, __dirname, config))
    .then((e) => {
        console.log("Service started on port ", config.port);
    })
    .catch((err) => {
        console.log("Failed to start service", err);
    });