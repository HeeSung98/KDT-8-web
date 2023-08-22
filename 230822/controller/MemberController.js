const data = [
  { id: 1, 이름: '윤희성', 성별: '남', 전공: '컴퓨터 공학' },
  { id: 2, 이름: '윤희성', 성별: '남', 전공: '컴퓨터 공학' },
  { id: 3, 이름: '윤희성', 성별: '남', 전공: '컴퓨터 공학' },
  { id: 4, 이름: '윤희성', 성별: '남', 전공: '컴퓨터 공학' },
]

exports.main = (req, res) => {
  res.render('member', { data })
}

exports.register = (req, res) => {
  console.log(req.body)
  data.push(req.body)
  console.log('data:', data)
  res.send(data)
}
