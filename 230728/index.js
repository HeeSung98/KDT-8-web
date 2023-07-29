const express = require('express')

const app = express()
const PORT = 8080

app.set('view engine', 'ejs')

//views 파일 불러오기
app.set('views', './views')

//정적인 파일 불러오기
app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('hello express')
  //res.send({ result: true, code: 1000, message: '회원가입에 성공하셨습니다.' })
  res.render('main')
})

app.get('/lava', (req, res) => {
  res.render('lava')
})

app.get('/change', (req, res) => {
  res.render('change')
})

app.get('/gugu', (req, res) => {
  res.render('gugu', { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9] })
})

app.get('/', (req, res) => {
  res.render('gugu', { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9] })
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

console.log(express)
