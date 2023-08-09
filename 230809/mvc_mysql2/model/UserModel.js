import mysql from 'mysql2/promise'

const conn = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'bootcamp',
})

export const signup = async (data) => {
  try {
    const query = `insert into user (id, name, pw) values (?, ?, ?)`
    const rows = await conn.query(query, [data.id, data.name, data.pw])
    return rows
  } catch (err) {
    console.log(err)
  }
}

export const login = async (data) => {
  try {
    const query = 'select id, name from user where id=? and pw = ?'
    const [rows] = await conn.query(query, [data.id, data.pw])
    return rows
  } catch (err) {
    console.log(err)
  }
}
