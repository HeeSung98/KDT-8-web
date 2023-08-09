import express from 'express'
import userRouter from './routes/user.js'
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
app.use('/user', userRouter)

//404
app.use('*', (req, res) => {
  res.render('404')
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
