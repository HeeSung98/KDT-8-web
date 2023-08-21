const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.get('/', controller.index)
//로그인
//회원가입
router.get('/register', controller.getRegister)
router.post('/register', controller.postRegister)

module.exports = router
