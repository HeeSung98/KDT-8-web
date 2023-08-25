const { User } = require('../models')
const bcrypt = require('bcrypt')

const bcryption = (pw) => {
  return bcrypt.hashSync(pw, 10)
}

exports.index = (req, res) => {
  res.render('index')
}

exports.getRegister = (req, res) => {
  res.render('register')
}

exports.getLogin = (req, res) => {
  res.render('login')
}

exports.postRegister = async (req, res) => {
  try {
    const { userId, userName, userPw } = req.body
    console.log('req.body:', userId, userName, userPw)
    const hashPw = bcryption(userPw)
    const result = await User.create({
      userId,
      userName,
      userPw: hashPw,
    })
    if (result) {
      res.json({ result: true })
    }
  } catch (e) {
    console.log(e)
    res.json({ result: false })
  }
}
