const express = require('express')
const bcrypt = require('bcrypt')
const router = require('./router/LoginRouter.js')
const app = express()
const PORT = 8080

//view
app.set('view engine', 'ejs')
app.set('views', './views')

//static file loading
app.use('/uploads', express.static(__dirname + '/uploads'))

//encode
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
app.use('/', router)

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
