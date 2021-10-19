const express = require('express');

const fileUpload = require('express-fileupload');

const httpStatus = require('http-status');

const { errorConverter, errorHandler } = require('./helper/error');

const ApiError = require('./helper/apiError');

const routes = require('./routes/v1');

const app = express();

// default options
app.use(fileUpload({
    useTempFiles : true,
    preserveExtension: true,
    tempFileDir : '/tmp/',
    limits: { fileSize: 50 * 1024 * 1024 },
    debug: true,
}));

app.use('/api/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;