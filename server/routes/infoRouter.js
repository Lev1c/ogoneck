const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/infoController');
const adminAuthMiddleware = require('../middleware/authMiddleware');


router.get('/info-get', userContoller.getAllInfo);
router.get('/info-get-id', userContoller.getInfoById);

router.post('/info-create', adminAuthMiddleware, userContoller.createInfo);

router.patch('/info-change',adminAuthMiddleware, userContoller.updateInfo);

router.delete('/info-delete',adminAuthMiddleware, userContoller.deleteInfo);

module.exports = router