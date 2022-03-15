const Router = require("express");
const router = new Router();
const articleRouter = require("./articleRouter");
const sectionRouter = require("./sectionRouter");
const userRouter = require("./userRouter");
const videoRouter = require("./videoRouter");

router.use("/user", userRouter);
router.use("/section", sectionRouter);
router.use("/article", articleRouter);
router.use("/video", videoRouter);

module.exports = router;
