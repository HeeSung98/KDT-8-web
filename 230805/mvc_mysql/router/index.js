const express = require('express')
const controller = require('../controller/VisitorController')
const router = express.Router()

router.get('/', controller.main)
router.get('/visitor', controller.visitor)
router.post('/visitor/register', controller.visitorRegister)
router.patch('/visitor/modify', controller.visitorModify)
router.patch('/visitor/remove', controller.visitorRemove)

module.exports = router
