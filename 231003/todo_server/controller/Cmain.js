let db = [
  {
    id: 1,
    title: '추석 연휴가 시작되었습니다',
    done: false,
  },
  {
    id: 2,
    title: '즐거운 추석연휴보내세요',
    done: false,
  },
  {
    id: 3,
    title: '과제도 꼭 해주시기 바랍니다',
    done: false,
  },
  {
    id: 4,
    title: '모두 고향 잘 다녀오세요',
    done: false,
  },
]

const get_todo = (req, res) => {
  console.log(
    ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ get_todo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
  )
  res.json({ data: db })
}
const post_todo = (req, res) => {
  console.log(
    ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ post_todo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
  )
  console.log()
  console.log('req.body:', req.body)
  const { id, title, done } = req.body

  db.push({
    id,
    title,
    done,
  })

  console.log('db:', db)
  res.json({ data: db })
}

const patch_todo = (req, res) => {
  console.log(
    ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ patch_todo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
  )
  console.log('req.params:', req.params)
  console.log('req.body:', req.body)
  const { id } = req.params
  const { title } = req.body

  db = db.filter((element) => {
    return element.id == id ? (element.title = title) : element.title
  })

  console.log('db:', db)
  res.json({ data: db })
}

const delete_todo = (req, res) => {
  console.log(
    ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ delete_todo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
  )
  console.log('req.params:', req.params)
  const { id } = req.params

  db = db.filter((element) => {
    return element.id != id
  })

  console.log('db:', db)
  res.json({ data: db })
}

module.exports = { get_todo, post_todo, patch_todo, delete_todo }
