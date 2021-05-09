const { Router } = require('express')
const router = Router()
const { AuthController } = require('../controllers')
const { AuthRequest } = require('../requests')

router.post('/login', AuthRequest.login, AuthController.login)
router.post('/register', AuthRequest.register, AuthController.register)

module.exports = router