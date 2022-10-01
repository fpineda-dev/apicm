const express = require("express");
const validatorResults = require("../utils/handleValidator");
const { validatorBody, validatorId } = require("../validators/roles");
// eslint-disable-next-line import/no-extraneous-dependencies
const router = express.Router();
const {
  getAll,
  getById,
  create,
  update,
  remove,
} = require("../controllers/roles");

router.get("/", getAll);
router.get("/:id", [...validatorId, validatorResults], getById);
router.post("/", [...validatorBody, validatorResults], create);
router.put(
  "/:id",
  [...validatorId, ...validatorBody, validatorResults],
  update
);
router.delete("/:id", [...validatorId, validatorResults], remove);

module.exports = router;
