const { Router } = require('express')
const router = Router()

const { TagController } = require('../controllers')
const { TagRequest } = require('../requests')

router.get('/', TagController.get)
router.post('/', TagRequest.create, TagController.create)

module.exports = router