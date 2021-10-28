const processor = require('../processors/register.process');

const config = require('../configuration/config');

const upload = (req, res) => {

    if(!req.files.file) return res.status(400).json({"message": "file missing in request"});

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
