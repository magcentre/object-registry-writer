const Registry = require('../models').Registry;

let saveUploadedFile = (fileObject) => {
    
    try {
        let { Key, mimetype, size, accessKey  } = fileObject;
        return Registry.create({
            name: Key,
            type: mimetype,
            size: size,
            url: process.env.READERHOST + accessKey
        });
        
    } catch(e) {
        throw e;
    }   
}

module.exports = {
    saveUploadedFile
}