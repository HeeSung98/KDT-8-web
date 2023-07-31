const express = require('express')
const app = express()
const PORT = 8080

//body-parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
  //res.send('hello')
  res.render('index', { title: '폼 실습' })
})

app.get('/get', (req, res) => {
  res.render('get')
})

app.get('/getResult', (req, res) => {
  console.log(req.query)
  res.render('getResult', { title: 'GET 결과!', userInfo: req.query })
})

app.get('/post', (req, res) => {
  res.render('post')
})

app.post('/postResult', (req, res) => {
  res.render('postResult', { title: 'POST 결과!', userInfo: req.body })
})

app.post('/', (req, res) => {
  console.log(req.body)
})

app.get('/getForm', (req, res) => {
  console.log(req.query)
  res.render('result', { title: 'getForm 결과 확인', userInfo: req.query })
})

app.post('/postForm', (req, res) => {
  console.log(req.body)
  res.render('result', { title: 'postForm 결과 확인', userInfo: req.body })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
