const express = require("express");

const router = express.Router();
const api = require("./v1");
router.use("/api", api);

module.exports = router;
