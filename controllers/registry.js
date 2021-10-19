const path = require('path')

const { saveUploadedFile } = require('../services/registry');

const { catchAsync, randomString } = require('@makosmods/utils')

const logger = require('@makosmods/logger-helper');

const { uploadFile } = require('@makosmods/minio-helper');

const uploadObject = catchAsync((req, res) => {

    if(!req.files || !req.files.file) return res.status(400).send({'error': "bad request"});

    let { tempFilePath, name, mimetype, size } = req.files.file;

    let newFileName = `${randomString(32)}${path.extname(name)}`;

    uploadFile(tempFilePath, newFileName, mimetype)
        .then((e) => { return saveUploadedFile({...e, mimetype, size, }); })
        .then((e) => { res.status(200).send(e) });
});

module.exports = {
    uploadObject
}