const Router = require('express')
const router = new Router()
const userContoller = require('../controllers/newsController');
const adminAuthMiddleware = require('../middleware/authMiddleware');


router.get('/news-get', userContoller.getAllNews);
router.get('/news-get-id/:id', userContoller.getNewsById);


router.get('/news-get-admin', userContoller.getAllNewsAdmin);

router.post('/news-create', userContoller.createNews);

router.patch('/news-change', userContoller.updateNews);

router.delete('/news-delete/:id', userContoller.deleteNews);

module.exports = router