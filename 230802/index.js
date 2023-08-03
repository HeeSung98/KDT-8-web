const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8080

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//static file loading
app.use('/uploads', express.static(__dirname + '/uploads'))

//upload
const upload = multer({
  dest: 'uploads/',
})
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/')
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname)
      done(null, path.basename(file.originalname, ext) + Date.now() + ext)
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 1,
  },
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/practice1', (req, res) => {
  res.render('practice1')
})

app.post('/upload', uploadDetail.single('userFile'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
})

app.post('/uploadArray', uploadDetail.array('userFiles'), (req, res) => {
  console.log(req.files)
  console.log(req.body)
})

app.post(
  '/uploadFields',
  uploadDetail.fields([{ name: 'userFile1' }, { name: 'userFile2' }]),
  (req, res) => {
    console.log(req.files)
    console.log(req.body)
  }
)

app.post('/uploadDynamic', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.file)
  res.send(req.file)
})

app.post('/result', uploadDetail.single('dynamicFile'), (req, res) => {
  console.log(req.body)
  res.send({ userInfo: req.body, file: req.file })
})

app.listen(PORT, () => {
  console.log(console.log(`http://localhost:${PORT}`))
})
