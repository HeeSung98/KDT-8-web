const express = require('express')
const app = express()
const PORT = 8080

const userInfo = { id: 'kdt8', pw: '1234' }

//body-parser
app.use(express.json())
//view engine
app.set('view engine', 'ejs')

//router
app.get('/', (req, res) => {
  res.render('index')
})
//post실습
app.get('/axiosPost', (req, res) => {
  res.render('post')
})
app.post('/resultPost', (req, res) => {
  //코드 실습
  const { id, pw } = req.body
  if (userInfo.id === id && userInfo.pw === pw) {
    console.log('로그인 성공')
    res.json({ result: true, id })
  } else {
    res.send({ result: false })
  }
})

//server start
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
