const e = require('cors');
const processor = require('../processors/register.process');

const upload = (req, res) => {
    let file = {
        ...req.files.file,
        bucket: 'test'
    }
    processor.uploadToMinio(file)
        .then((e) => processor.createRegistryEntry(e))
        .then((e) => res.status(200).json(e));
};

module.exports = {
    upload,
};
