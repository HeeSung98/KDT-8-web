const express = require('express')
const cookie = require('cookie-parser')
const app = express()
const PORT = 8080

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//encode
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//cookie
app.use(cookie())
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, //1min
}

app.get('/', (req, res) => {
  res.render('index', { popup: req.cookies.modal })
})

app.post('/setCookie', (req, res) => {
  res.cookie('modal', 'hide', cookieConfig)
  res.send({ result: true, msg: '쿠키 생성 완료' })
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
