const { sendResult, sendError, getRichError } = require('@magcentre/response-helper');

const processor = require('../processors/register.process');

const config = require('../configuration/config');

const upload = (req, res) => {

  if (!req.files.file) {
    const badRequestError = getRichError('Parameter', 'request must have object to upload');
    sendError(badRequestError, res, 400, req);
    return;
  }

  const fileConfig = {
    ...req.files.file,
    bucket: config.minio.bucket,
  };

  processor.processFile(req.files.file.path)
    .then((e) => processor.uploadToMinio(fileConfig, e))
    .then((e) => processor.createRegistryEntry(e))
    .then((e) => sendResult(e, 200, res, req))
    .catch((e) => sendError(e, res, 500, req));
};

const create = (req, res) => {

  processor.createRegistryEntry({ ...req.body, accessKey: req.body.url })
    .then((e) => sendResult(e, 200, res, req))
    .catch((e) => sendError(e, res, 500, req));
}

module.exports = {
  upload,
  create
};
