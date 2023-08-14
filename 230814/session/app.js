const express = require('express')
const session = require('express-session')
const app = express()
const PORT = 8080

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//encode
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//session
app.use(
  session({
    secret: 'chicken',
    resave: false,
    saveUninitialized: true,
  })
)
const userInfo = {
  id: 'tester',
  pw: '1234',
}

app.get('/', (req, res) => {
  const user = req.session.user
  console.log(user)
  if (user === undefined) {
    res.render('index', { isLogin: false })
  } else {
    res.render('index', { isLogin: true, user })
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  console.log('userId:', req.body.id)
  console.log('userPw:', req.body.pw)
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id
    res.redirect('/')
  } else {
    res.clearCookie('connect.sid')
    res.send(
      `<script>alert('로그인 실패'); document.location.href='/login'</script>`
    )
  }
})

app.get('/logout', (req, res) => {
  const user = req.session.user
  if (user === undefined) {
    res.send(
      `<script>alert('잘못된 접근입니다'); document.location.href='/login'</script>`
    )
  } else {
    req.session.destroy(() => {
      res.clearCookie('connect.sid')
      res.redirect('/')
    })
  }
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
