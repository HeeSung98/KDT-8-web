const express = require('express')
const app = express()
const PORT = 8080

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//static
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/axiosGet', (req, res) => {
  res.render('axiosGet')
})

app.get('/resultGet', (req, res) => {
  console.log(req.query)
  res.send({ result: true, data: req.query })
})

app.get('/axiosPost', (req, res) => {
  res.render('axiosPost')
})

app.post('/resultPost', (req, res) => {
  console.log('reqBody: ', req.body)
  console.log(req.body.username + ', ' + req.body.password)
  const id = 'tester'
  const pw = '1234'
  if (id === req.body.username && pw === req.body.password) {
    res.send({ result: true, userInfo: req.body })
  } else {
    res.send({ result: false })
  }
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
