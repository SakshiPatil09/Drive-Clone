const router = require('express').Router()
const authenticaticate = require('../middlewares/jwtAuthentication')
const profile = require('../controllers/user/userController')

router.get("/profile/:userid", profile);

module.exports = router