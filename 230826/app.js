const express = require('express')
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const multer = require('multer')
const dotenv = require('dotenv')
const app = express()
const PORT = 8080

dotenv.config()

app.set('view engine', 'ejs')
app.use('/uploads', express.static(__dirname + '/uploads'))

aws.config.update({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_ACCESSKEY,
  region: process.env.S3_REGION,
})

const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    metadata: function (req, file, callback) {
      callback(null, { fieldName: file.fieldname })
    },
    key: function (req, file, callback) {
      callback(null, Date.now().toString() + '-' + file.originalname)
    },
  }),
})

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/upload', upload.array('files'), (req, res) => {
  console.log('req.files', req.files)
  res.send(req.files)
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
