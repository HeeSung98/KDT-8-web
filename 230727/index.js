const express = require('express')
const app = express()
const PORT = 8080

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//static file loading
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello nodejs')
})

app.get('/test', (req, res) => {
  res.render('test')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
