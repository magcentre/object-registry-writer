const express = require('express');

const registryController = require("../../controllers/registry");

const router = express.Router();

router.post("/upload", registryController.uploadObject);

module.exports = router;