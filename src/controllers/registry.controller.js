const processor = require('../processors/register.process');

const config = require('../configuration/config');

const { sendResult, sendError, getRichError  } = require('@magcentre/response-helper');

const upload = (req, res) => {

    if(!req.files.file) {
        let badRequestErrpr = getRichError('Parameter', 'request must have object to upload');
        
        sendError(badRequestErrpr, res, 400, req);
        return;
    }

    let file = {
        ...req.files.file,
        bucket: config.minio.bucket
    }
    
    processor.uploadToMinio(file)
        .then((e) => processor.createRegistryEntry(e))
        .then((e) => sendResult(e, 200, res, req))
        .catch((e) => sendError(e, res, 500, req));
};

module.exports = {
    upload,
};
