const express = require('express')
const router = express.Router()
const controller = require('../controller/Cmain')

router.get('/', controller.main)
//회원가입
router.get('/signup', controller.signup) //회원가입 페이지 열기
router.post('/signup', controller.post_signup) //데이터베이스에 회원정보저장

//로그인
router.get('/signin', controller.signin) //로그인 페이지 열기
router.post('/signin', controller.post_signin) //로그인하기

//조회
router.get('/profile/:init', controller.profile)
//수정
router.patch('/profile/edit', controller.edit_profile)
//삭제
router.delete('/profile/destroy', controller.destroy_profile)

module.exports = router
