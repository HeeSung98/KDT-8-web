exports.main = (req, res) => {
  res.render('member', { data })
}

exports.register = (req, res) => {
  console.log(req.body)
  data.push(req.body)
  console.log('data:', data)
  res.send(data)
}
