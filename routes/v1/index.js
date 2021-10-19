const express = require('express');

const registryRoute = require('./registry');

const mainRouter = express.Router();

mainRouter.use("/registry", registryRoute);

module.exports = mainRouter;