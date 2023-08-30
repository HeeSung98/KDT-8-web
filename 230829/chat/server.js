const http = require('http')
const express = require('express')
const SocketIO = require('socket.io')

const PORT = 8000
const app = express()

const server = http.createServer(app)
const io = SocketIO(server)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:room', (req, res) => {
  const room = req.params.room
})

function getUsersInRoom(room, name) {
  const users = []
  const clients = io.sockets.adapter.rooms.get(room)
  //console.log(clients);
  if (clients) {
    clients.forEach((socketId) => {
      const userSocket = io.sockets.sockets.get(socketId)
      console.log(userSocket.user + ', ' + name)
      const info = { name: userSocket.user, id: userSocket.id }
      users.push(info)
    })
  }
  return users
}
const roomList = []
let usersInRoom

io.on('connection', (socket) => {
  //socket!//
  //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
  //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
  //console.log(io.sockets);
  //채팅방 목록 보내기
  socket.emit('roomList', roomList)
  //채팅방 만들기 생성
  socket.on('create', (roomName, userName, cb) => {
    //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
    //socket.rooms에 socket.id값과 방이름 확인가능
    socket.join(roomName)
    //socket은 객체이며 원하는 값을 할당할 수 있음
    socket.room = roomName
    socket.user = userName

    socket.to(roomName).emit('notice', `${socket.id}님이 입장하셨습니다`)

    //채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName)
      //갱신된 목록은 전체가 봐야함
      io.emit('roomList', roomList)
    }
    usersInRoom = getUsersInRoom(roomName, userName)
    io.to(roomName).emit('userList', usersInRoom)
    cb()
  })

  socket.on('sendMessage', (message) => {
    console.log('message:', message)
    if (message)
      if (message.target === 'all') {
        console.log('전체 메세지')
        io.to(socket.room).emit(
          'newMessage',
          message.message,
          message.target,
          message.nick,
          false
        )
      } else {
        console.log('디엠')
        for (let key in usersInRoom) {
          console.log(usersInRoom[key].id)
          if (
            usersInRoom[key].name == message.target ||
            usersInRoom[key].name == message.nick
          ) {
            io.to(usersInRoom[key].id).emit(
              'newMessage',
              message.message,
              message.target,
              message.nick,
              true
            )
          }
        }
      }
  })

  socket.on('disconnect', () => {
    if (socket.room) {
      io.to(socket.room).emit('exit', `${socket.id}님이 퇴장하셨습니다.`)
      socket.leave(socket.room)
    }
  })
})

server.listen(8000, () => {
  console.log(`http://localhost:${PORT}`)
})
