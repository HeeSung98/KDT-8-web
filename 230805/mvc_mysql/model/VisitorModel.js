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

exports.selectVisitors = (callback) => {
  console.log('selectVisitors')
  const sql = 'select * from visitor;'
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.selectVisitor = (id, callback) => {
  console.log('selectVisitor')
  const sql = `select * from visitor where id = '${id}'`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
    callback(rows)
  })
}

exports.insertVisitor = (name, comment, callback) => {
  console.log('insertVisitor')
  const sql = `insert into visitor (name, comment) values ('${name}', '${comment}')`
  conn.query(sql, (err, rows) => {
    if (err) throw err
    console.log('Visitors: ', rows)
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
