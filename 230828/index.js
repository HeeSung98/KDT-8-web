const ws = require('ws')
const express = require('express')
const app = express()
const PORT = 8080

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('client')
})

const server = app.listen(PORT, () => {
  console.log(`localhost:${PORT}`)
})

const wss = new ws.Server({ server })
const sockets = []

wss.on('connection', (socket) => {
  console.log('클라이언트와 연결되었습니다.')
  sockets.push(socket)

  socket.on('message', (message) => {
    const chat = JSON.parse(message)
    console.log(`${chat.name}(으)로부터 받은 메세지: ${chat.msg}`)

    sockets.forEach((element) => {
      if (socket != element) {
        element.send(`${chat.name}: ${chat.msg}`)
      }
    })
  })

  socket.on('error', (err) => {
    console.log(err)
  })

  socket.on('close', () => {
    console.log('클라이언트와 연결이 종료되었습니다.')
  })
})
