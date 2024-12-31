const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const infoRouter = require('./infoRouter')
const newsRouter = require('./newsRouter')
const documentRouter = require('./documentRouter')

router.use('/api', userRouter);
router.use('/api', infoRouter);
router.use('/api', newsRouter);
router.use('/api', documentRouter);


module.exports = router
