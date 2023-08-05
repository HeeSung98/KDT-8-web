const Comment = require('../model/Comments')

exports.main = (req, res) => {
  res.render('index')
}

exports.comments = (req, res) => {
  console.log(Comment.commentsInfo())
  res.render('comments', { commentsInfo: Comment.commentsInfo() })
}

exports.comment = (req, res) => {
  console.log(req.params.id)
  const commentId = req.params.id
  const comments = Comment.commentsInfo()
  console.log(comments[commentId - 1])

  if (isNaN(commentId)) {
    return res.render('404')
  }
  if (commentId < 1 || commentId > comments.length) {
    return res.render('404')
  }

  res.render('comment', { commentInfo: comments[commentId - 1] })
}
