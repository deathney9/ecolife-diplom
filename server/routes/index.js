const Router = require('express');
const router = new Router();
const articleRouter = require('./articleRouter');
const sectionRouter = require('./sectionRouter');
const userRouter = require('./userRouter');
const videoRouter = require('./videoRouter');
const photoRouter = require('./photoRouter');

router.use('/user', userRouter);
router.use('/section', sectionRouter);
router.use('/article', articleRouter);
router.use('/video', videoRouter);
router.use('/photo', photoRouter);

module.exports = router;
