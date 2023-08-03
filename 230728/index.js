const express = require('express')
const app = express()
const PORT = 8080

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//static file loading
app.use(express.static('public'))

app.get('/', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
