const express = require('express')
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

const indexRouter = require('./routes')
app.use('/', indexRouter)

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})
