const { sendResult, sendError, getRichError } = require('@magmods/response-helper');
const { convertParams } = require('@magmods/swagger-helper');
const processor = require('../processors/systemProcessor');

const getHealthCheck = (req, res) => {
  const options = convertParams(req);

  if (!options.types || options.types.length === 0) {
    sendError(getRichError('Parameter', 'types must have at least 1 item'), res, null, options);
    return;
  }

  processor.getHealthCheck(options.types, options.correlationId)
    .then((result) => sendResult(result, 200, res, options))
    .catch((err) => sendError(err, res, null, options));
};

module.exports = {
  getInfo,
};
