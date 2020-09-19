const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp'),
        filename(request, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`
            return callback(null, fileName)
        },
    }),
    fileFilter(req, file, cb) {
        const { mimetype } = file
        console.log(mimetype)
        if (mimetype !== 'image/jpeg'){
            return cb(null, false)
        }
        cb(null, true)

    }
}
