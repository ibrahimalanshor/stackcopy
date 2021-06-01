const { Router } = require('express')
const router = Router()
const { QuestionController } = require('../controllers')
const { QuestionRequest } = require('../requests')

router.get('/', QuestionController.get)
router.post('/', QuestionRequest.create, QuestionController.create)
router.get('/:username/:slug', QuestionController.find)

module.exports = router