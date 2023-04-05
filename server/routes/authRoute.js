const router = require('express').Router()
const userSignup = require("../controllers/auth/userSignup");
const userSignin = require('../controllers/auth/userSignin')

// User Signup
router.post("/signup", userSignup);

// User Signin
router.post('/signin', userSignin)

module.exports = router