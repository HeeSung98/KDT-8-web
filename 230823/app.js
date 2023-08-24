const express = require('express')
const app = express()
const router = require('./router/MemberRouter')
const PORT = 8080

//view
app.set('view engine', 'ejs')

//encode
app.use(express.json())

//router
app.use('/', router)

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
