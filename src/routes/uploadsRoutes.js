const {Router} = require('express');
const multer = require('multer');
const path = require('path')

const routes = Router();
const uploadConfig = require('../config/multer');

const UploadController = require('../controllers/uploadController')
const uploadController = new UploadController;

const upload = multer(
    uploadConfig,   
);


routes.post('/single',upload.single('image'),uploadController.uploadSingle)

module.exports = routes;