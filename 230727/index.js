// import { a, b } from './module.js'
// import connect from './module.js'

// // const module_1 = require('./module.js')
// // const { c } = require('./module.js')
// // console.log(module_1.a)
// // console.log(module_1.b)

// console.log(a, b)
// console.log(connect())

const { response } = require('express')

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  //   response.writeHead(200)
  //   response.write('<h1>hello world</h1>')
  //   response.end('<p>End</p>')

  try {
    const data = fs.readFileSync('./index.html')
    response.writeHead(200)
    throw '예외발생'
    response.end(data)
  } catch (error) {
    console.log(error)
    response.writeHead(400)
    response.end(error.mes)
  }
})

server.listen('8080', function () {
  console.log('8080번 포트로 서버 실행')
})
