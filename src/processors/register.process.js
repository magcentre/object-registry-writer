const { models } = require('@magcentre/sequelize-helper');

const minio = require('@magcentre/minio-helper');

const utils = require('@magcentre/api-utils');

const path = require('path');

const uploadToMinio = (file) => {
  const fileConfig = {
    name: utils.randomString(32) + path.extname(file.originalname),
    bucket: file.bucket,
    type: file.mimetype,
    body: file.buffer,
    size: file.size,
  };
  return minio.upload(fileConfig);
};

const createRegistryEntry = (minioResponse) => models.registry.create({
  name: minioResponse.name,
  type: minioResponse.type,
  size: minioResponse.size,
  url: minioResponse.accessKey,
  bucket: minioResponse.bucket,
});

module.exports = {
  uploadToMinio,
  createRegistryEntry,
};
