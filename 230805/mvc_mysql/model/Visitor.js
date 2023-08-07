// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: '홍길동',
//       comment: '허허',
//     },
//     {
//       id: 2,
//       name: '전우치',
//       comment: '으싸으싸',
//     },
//   ]
// }

const mysql = require('mysql')
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'bootcamp',
})

exports.getVisitors = (callback) => {
  const sql = 'select * from visitor;'
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.insertVisitors = (name, comment, callback) => {
  const sql = `insert into visitor (name, comment) values ('${name}', '${comment}')`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.updateVisitors = (id, name, comment, callback) => {
  const sql = `update visitor set name = '${name}', comment = '${comment}' where id = '${id}'`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.deleteVisitors = (id, callback) => {
  const sql = `delete from visitor where id = ${id}`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}
