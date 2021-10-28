const processor = require('../processors/register.process');

const config = require('../configuration/config');

const upload = (req, res) => {
    let file = {
        ...req.files.file,
        bucket: config.minio.bucket
    }
    processor.uploadToMinio(file)
        .then((e) => processor.createRegistryEntry(e))
        .then((e) => res.status(200).json(e));
};

module.exports = {
    upload,
};
