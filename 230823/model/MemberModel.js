const mysql = require('mysql')
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'user',
//   password: '1234',
//   database: 'bootcamp',
// })

const conn = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'bootcamp',
  port: 3306,
  connctionLimit: 30,
})

const signup = (userId, userName, userPw, callback) => {
  console.log('signup')
  const sql = `insert into member (userId, userName, userPw) values (?, ?, ?)`
  conn.query(sql, [userId, userName, userPw], (err, rows) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('result:', rows)
    callback()
  })
}

const signin = (userId, userPw, callback) => {
  console.log('signin')
  const sql = `select userId from member where userId = ?`
  conn.query(sql, userId, (err, rows) => {
    if (err) {
      console.log(err)
      return
    }
    const selectedUserid = rows[0].userId
    console.log('selectedUserid:', selectedUserid)
    if (selectedUserid) {
      const sql2 = `select id, userName, userPw from member where userId = ?`
      conn.query(sql2, userId, (err, rows) => {
        if (err) {
          console.log(err)
          return
        }
        const selectedId = rows[0].id
        const selectedUserName = rows[0].userName
        const selectedUserpw = rows[0].userPw
        console.log('selectedId:', selectedId)
        console.log('selectedUserName:', selectedUserName)
        console.log('selectedUserpw:', selectedUserpw)
        if (selectedUserpw == userPw) {
          console.log('singin success')
          callback([rows[0].id, rows[0].userName])
        } else {
          console.log('incorrect password')
          return
        }
      })
    } else {
      console.log('incorrect id')
      return
    }
  })
}

const readMember = (id, callback) => {
  console.log('readMember')
  const sql = `select * from member where id = ?`
  conn.query(sql, id, (err, rows) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('result:', rows)
    callback(rows)
  })
}

exports.updateVisitor = (id, name, comment, callback) => {
  console.log('updateVisitor')
  const sql = `update visitor set name = '${name}', comment = '${comment}' where id = '${id}'`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.deleteVisitor = (id, callback) => {
  console.log('deleteVisitor')
  const sql = `delete from visitor where id = ${id}`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

module.exports = {
  signup,
  signin,
  readMember,
}
