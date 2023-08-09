const Login = require('../model/LoginModel')

exports.main = (req, res) => {
  res.render('index')
}

exports.signupGet = (req, res) => {
  res.render('signup')
}

exports.signupPost = (req, res) => {
  const data = req.body
  console.log(data)
  Login.signup(data.id, data.name, data.pw, (result) => {
    console.log(result)
    res.render('index', { result })
  })
}

exports.loginGet = (req, res) => {
  res.render('login')
}

exports.loginPost = (req, res) => {
  const data = req.body
  console.log('Login Post')
  console.log(data)
  Login.login(data.id, data.pw, (result) => {
    console.log('Login Result: ', data)
    res.send({ data })
  })
}

exports.profilePost = (req, res) => {
  const data = req.body
  console.log('Profile Post')
  console.log('req.body:', data)
  Login.profile(data.profile, (result) => {
    console.log('Profile Result: ', result)
    res.render('profile', { data: result })
  })
}

exports.profilePatch = (req, res) => {
  const data = req.body
  console.log('Profile Patch')
  console.log('req.body:', data)
  Login.modify(data.idno, data.name, (result) => {
    console.log('Modify Result: ', result)
    res.render('profile', { data: result })
  })
}

exports.profileDelete = (req, res) => {
  const data = req.body
  console.log('Profile Delete')
  console.log('req.body:', data)
  Login.remove(data.idno, (result) => {
    console.log('Remove Result: ', result)
    res.render('index', { data: result })
  })
}
