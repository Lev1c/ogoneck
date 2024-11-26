const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/newsController');
const adminAuthMiddleware = require('../middleware/authMiddleware');


router.get('/news-get', userContoller.getAllNews);
router.get('/news-get-id', userContoller.getNewsById);


router.post('/news-create', adminAuthMiddleware, userContoller.createNews);

router.patch('/news-change', adminAuthMiddleware, userContoller.updateNews);

router.delete('/news-delete', adminAuthMiddleware, userContoller.deleteNews);

module.exports = router