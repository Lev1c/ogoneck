const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
// const infoRouter = require('./infoRouter')
// const newsRouter = require('./newsRouter')

router.use('/api', userRouter);
// router.use('/api', infoRouter);
// router.use('/api', newsRouter);


module.exports = router
