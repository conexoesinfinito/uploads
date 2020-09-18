const sharp = require('sharp')
const  Upload = require('../models/Upload');
const path = require('path')
const fs = require('fs')


class UploadController {
    async uploadSingle(req,res){
        try {
            console.log(req.file)
            await sharp(req.file.path)
            .resize(500)
            .jpeg({quality:50})
            .toFile(path.resolve(req.file.destination,'resized',req.file.filename))

            const upload = await Upload.create({
                image : req.file.filename
            })
            fs.unlinkSync(req.file.path)

            res.json(upload)

        } catch (error) {
            console.log(error)
            return res.json(error);
        }
    }
}


module.exports = UploadController;