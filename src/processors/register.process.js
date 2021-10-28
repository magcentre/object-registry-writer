const dbModels = require('@makosmods/sequelize-helper').models;

const minio = require('@makosmods/minio-helper');

const utils = require('@makosmods/utils');

const path = require('path');


const uploadToMinio = (file) => {
  var fileConfig = {
    name: utils.randomString(32) + path.extname(file.originalname),
    bucket: file.bucket,
    type: file.mimetype,
    body: file.buffer,
    size: file.size,
  }
  return minio.upload(fileConfig);
}

let createRegistryEntry = (minioResponse) => {
  return dbModels.registry.create({
    name: minioResponse.name,
    type: minioResponse.type,
    size: minioResponse.size,
    url: minioResponse.accessKey,
    bucket: minioResponse.bucket,
  })
}

module.exports = {
  uploadToMinio,
  createRegistryEntry
};
