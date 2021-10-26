const processor = require('../processors/systemProcessor');

const getHealthCheck = (req, res) => {
    processor.getSystemInfo()
        .then((e) => res.status(200).json(e))
        .catch((e) => console.log(e) );
};

module.exports = {
    getHealthCheck,
};
