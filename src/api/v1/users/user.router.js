const expres = require("express");

const {
  deleteUser,
  getAll,
  getOne,
  update,
  create,
} = require("./user.controller");

const router = expres.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteUser);

module.exports = router;
