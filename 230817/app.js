const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const PORT = 8080
const SECRETKEY = 'heesung'
const userInfo = { id: 'kvsi2', pw: '1234', name: 'heesung' }

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body
    const { id: uId, pw: uPw } = userInfo
    console.log(id, pw, uId, uPw)
    if (id === uId && pw === uPw) {
      const token = jwt.sign(id, SECRETKEY)
      res.json({ result: true, token })
    } else {
      res.json({ result: false, message: '아이디와 비밀번호를 확인해주세요' })
    }
  } catch (err) {
    console.log(err)
  }
})

app.post('/token', (req, res) => {
  const auth = req.headers.authorization
  const type = auth.split(' ')[0]
  const token = auth.split(' ')[1]
  console.log('token: ' + token)
  if (type === 'Bearer') {
    const result = jwt.verify(token, SECRETKEY)
    console.log('result: ' + result)
    if (result === userInfo.id) {
      console.log('authorize complete')
      res.json({ result: true, id: result })
    }
  } else {
    res.send({ result: false, message: '잘못된 인증 방식입니다.' })
  }
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
