const { User } = require('../models')
const bcrypt = require('bcrypt')
const bcryptPassword = (password) => bcrypt.hash(password, 11)
const compare = (password, dbpass) => bcrypt.compare(password, dbpass)
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, //1min
}

//----------------GET----------------
const main = (req, res) => {
  const user = req.session.user
  console.log('cookie:', req.cookies)
  if (!req.cookies.isLogin) {
    res.render('index', { isLogin: false })
  } else {
    User.findAll({}).then((result) => {
      res.render('index', { isLogin: true, user, result })
    })
  }
}

const signup = (req, res) => {
  res.render('signup')
}

const signin = (req, res) => {
  res.render('signin')
}

const profile = (req, res) => {
  console.log(req.params)
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render('profile', { data: result })
  })
}

//----------------POST----------------
const post_signup = async (req, res) => {
  const { userid, name, pw } = req.body
  console.log('req.body:', req.body)
  const hash = await bcryptPassword(pw)
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true })
  })
}

const post_signin = async (req, res) => {
  const { userid, pw } = req.body
  console.log('req.body:', userid, pw)
  const data = await User.findOne({
    where: { userid: userid },
  })
  console.log('data:', data)
  if (data) {
    const compareResult = await compare(pw, data.pw)
    if (compareResult) {
      res.cookie('isLogin', true, cookieConfig)
      req.session.user = data.name
      res.json({ result: true, data })
    } else {
      res.json({ result: false, message: '비밀번호가 일치하지 않습니다.' })
    }
  } else {
    res.json({ result: false, message: '아이디가 존재하지 않습니다.' })
  }
}

//----------------PATCH----------------
const edit_profile = (req, res) => {
  const { name, pw, id } = req.body
  User.update({ name, pw }, { where: { id } }).then(() => {
    res.json({ result: true })
  })
}

//----------------DELETE----------------
const destroy_profile = (req, res) => {
  const { name, pw, id } = req.body
  User.destroy({ where: { id } }).then(() => {
    res.json({ result: true })
  })
}

module.exports = {
  main,
  signup,
  signin,
  profile,
  post_signup,
  post_signin,
  edit_profile,
  destroy_profile,
}
