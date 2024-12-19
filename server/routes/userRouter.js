const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/userController')


router.post('/user-create', userContoller.register);
router.post('/user-login', userContoller.login);
router.post('/user-token', userContoller.protectedRoute);

module.exports = router