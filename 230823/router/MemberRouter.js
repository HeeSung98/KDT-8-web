const express = require('express')
const controller = require('../controller/MemberController')
const router = express.Router()

router.get('/', controller.main)

router.get('/signin', controller.getSignin)
router.post('/signin', controller.postSignin)

router.get('/signup', controller.getSignup)
router.post('/signup', controller.postSignup)

router.post('/member', controller.postMember)

module.exports = router
