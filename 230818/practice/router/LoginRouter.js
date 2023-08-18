const express = require('express')
const router = express.Router()
const controller = require('../controller/LoginController')

router.get('/', controller.main)

router.get('/login', controller.loginGet)
router.post('/login', controller.loginPost)

router.post('/profile', controller.profilePost)
router.patch('/profile/modify', controller.profilePatch)
router.delete('/profile/remove', controller.profileDelete)

module.exports = router
