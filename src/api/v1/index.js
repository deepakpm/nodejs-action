const expres = require("express");

const router = expres.Router();
const userRouter = require("./users");

router.use("/v1", userRouter);

module.exports = router;
