const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/infoController');
const adminAuthMiddleware = require('../middleware/authMiddleware');


router.get('/info-get', userContoller.getAllInfo);
router.get('/info-get-id/:id', userContoller.getInfoById);


router.get('/info-get-admin', userContoller.getAllInfoAdmin);

router.post('/info-create', userContoller.createInfo);

router.patch('/info-change', userContoller.updateInfo);

router.delete('/info-delete/:id', userContoller.deleteInfo);

module.exports = router