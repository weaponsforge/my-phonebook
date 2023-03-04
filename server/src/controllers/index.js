const { Router } = require('express')
const router = new Router()

const Email = require('./email')

router.post('/email', Email.sendEmail)

module.exports = router
