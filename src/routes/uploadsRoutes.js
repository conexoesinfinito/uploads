const {Router} = require('express');
const multer = require('multer');
const path = require('path')

const routes = Router();
const uploadConfig = require('../config/multer');

const UploadController = require('../controllers/uploadController')
const uploadController = new UploadController();

const upload = multer(uploadConfig);
const imageUpload = upload.single('image')


routes.post('/single', imageUpload, uploadController.uploadSingle)

module.exports = routes;