const express = require('express')
const controller = require('../controller/VisitorController')
const router = express.Router()

router.get('/', controller.main)
router.get('/visitor', controller.visitor)

module.exports = router
