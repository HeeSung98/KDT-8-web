const mysql = require('mysql')
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'bootcamp',
})

exports.signup = (id, name, pw, callback) => {
  console.log('model signup')
  const sql = `insert into user (id, name, pw) values ('${id}','${name}', '${pw}')`
  conn.query(sql, (err, rows) => {
    if (err) {
      callback(false)
    }
    callback(rows)
  })
}

exports.login = (id, pw, callback) => {
  console.log('model login')
  const sql = `select id, name from user where id = '${id}' and pw = '${pw}'`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log('login err: ', err)
      throw err
    }
    console.log('model login result:', rows)
    callback(rows)
  })
}

exports.profile = (id, callback) => {
  console.log('model profile')
  const sql = `select * from user where id = '${id}'`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      throw err
    }
    callback(rows)
  })
}

exports.modify = (idno, name, callback) => {
  console.log('model modify')
  const sql = `update user set name = '${name}' where idno = ${idno}`
  const sql2 = `select * from user where idno = ${idno}`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      throw err
    }
    conn.query(sql2, (err, rows) => {
      if (err) {
        console.log(err)
        throw err
      }
      callback(rows)
    })
  })
}

exports.remove = (idno, callback) => {
  console.log('model modify')
  const sql = `delete from user where idno = ${idno}`
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err)
      throw err
    }
    callback(rows)
  })
}
