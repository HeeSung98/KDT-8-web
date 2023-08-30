const http = require('http')
const socketIo = require('socket.io')
const express = require('express')
const app = express()
const PORT = 8080

app.set('view engine', 'ejs')

const server = http.createServer(app)
const io = socketIo(server)

app.get('/', (req, res) => {
  res.render('client')
})

io.on('connection', (socket) => {
  socket.on('new_message', (arg, cb) => {
    console.log(arg)
    cb(arg)
  })
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
