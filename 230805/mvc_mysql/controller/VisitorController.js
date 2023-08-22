const Visitor = require('../model/VisitorModel')

exports.main = (req, res) => {
  res.render('index')
}

exports.visitor = (req, res) => {
  // DB 연동 전
  // const data = Visitor.getVisitors()
  // console.log(data)

  // res.render('visitor', { data })

  Visitor.selectVisitors((data) => {
    console.log(data)
    res.render('visitor', { data })
  })
}

exports.visitorRegister = (req, res) => {
  const body = req.body
  console.log('req.body.name: ' + body.name)
  console.log('req.body.comment: ' + body.comment)
  Visitor.insertVisitor(body.name, body.comment, (data) => {
    console.log(data)
    res.render('visitor', { data })
  })
}

exports.visitorModify = (req, res) => {
  const body = req.body
  console.log('req.body.id: ' + body.id)
  console.log('req.body.name: ' + body.name)
  console.log('req.body.comment: ' + body.comment)
  Visitor.updateVisitor(body.id, body.name, body.comment, (data) => {
    console.log(data)
    res.render('visitor', { data })
  })
}

exports.visitorRemove = (req, res) => {
  const body = req.body
  console.log('req.body.id: ' + body.id)
  Visitor.deleteVisitor(body.id, (data) => {
    console.log(data)
    res.render('visitor', { data })
  })
}
