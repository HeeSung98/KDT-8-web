const Member = require('../model/MemberModel')

exports.main = (req, res) => {
  res.render('index')
}

exports.getSignin = (req, res) => {
  res.render('signin')
}

exports.getSignup = (req, res) => {
  res.render('signup')
}

exports.getMember = (req, res) => {
  res.render('member', { data: 1 })
}

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

exports.postSignup = (req, res) => {
  const { userId, userName, userPw } = req.body
  console.log(req.body)
  Member.signup(userId, userName, userPw, () => {
    res.json({ result: true })
  })
}

exports.postSignin = (req, res) => {
  console.log('req.body:', req.body)
  const { userId, userPw } = req.body
  Member.signin(userId, userPw, (signinRes) => {
    console.log('signinRes:', signinRes)
    if (signinRes.length > 0) {
      res.json({ result: true, userName: signinRes[1], id: signinRes[0] })
    } else {
      res.json({ result: false })
    }
  })
}

exports.postMember = (req, res) => {
  console.log('req.body:', req.body)
  Member.readMember(req.body.id, (readmemberRes) => {
    res.render('member', { data: readmemberRes })
  })
}
