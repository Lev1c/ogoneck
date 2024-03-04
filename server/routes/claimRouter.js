const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/claimController')


router.post('/claim-create', userContoller.createClaim);
router.get('/claim-get', userContoller.getAll);
router.patch('/claim-change', userContoller.changeTrim);
router.post('/claim-delete', userContoller.deleteClaim);

module.exports = router