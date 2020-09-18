const sharp = require('sharp')
const  Upload = require('../models/Upload');
const path = require('path')
const fs = require('fs')


class UploadController {
    async uploadSingle(req,res){
        try {
            const { filename: image } = req.file
            const [name] = image.split('.')
            const fileName = `${name}.jpg`

            await sharp(req.file.path)
            .resize(500, 300)
            .jpeg({quality: 71})
            .toFile(path.resolve(req.file.destination,'resized', fileName))
            fs.unlinkSync(req.file.path)

            const newImage = await Upload.create({
                image : fileName
            })

            return res.json(newImage)

        } catch (error) {
            return res.json(error);
        }
    }
    async uploadArray(req,res){
        try {
            
            const file = req.files
            const nameImage = []; 

            file.forEach(async function(file){
                    
                    const { filename: image } = file
                    const [name] = image.split('.')
                    const fileName = `${name}.jpg`
                    
                    nameImage.push(fileName)   
                    
                    await sharp(file.path)
                    .resize(500, 300)
                    .jpeg({quality: 71})
                    .toFile(path.resolve(file.destination,'resized', fileName))
                    fs.unlinkSync(file.path)
                
            })

            const newImage = await Upload.create({
                images : nameImage
            })

            return res.json(newImage)
            
        } catch (error) {
            return res.json(error);  
        }
    }
}


module.exports = UploadController;