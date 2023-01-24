const expres = require("express");
const userRouter = require("./user.router");
const router = expres.Router();

router.use("/user", userRouter);

module.exports = router;
