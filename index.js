require('dotenv').config()

const logger = require('@makosmods/logger-helper');

const app = require('./app');

let server = app.listen(process.env.PORT, () => {
    logger.info(`Listening to port ${process.env.PORT}`);
})