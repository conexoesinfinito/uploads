const {Router} = require('express');
const multer = require('multer');
const path = require('path')

const routes = Router();
const uploadConfig = require('../config/multer');

const UploadController = require('../controllers/uploadController')
const uploadController = new UploadController();

const upload = multer(uploadConfig);

routes.post('/single', upload.single('image'), uploadController.uploadSingle);
routes.post('/array', upload.array('image',5), uploadController.uploadArray);
routes.post('/fields',upload.fields([{name : 'image1',maxCount:1},{name:'image2',maxCount:1}]),uploadController.uploadaFields);
routes.post('/none',upload.none(),uploadController.uploadNone);
routes.post('/any',upload.any(),uploadController.uploadAny);


module.exports = routes;