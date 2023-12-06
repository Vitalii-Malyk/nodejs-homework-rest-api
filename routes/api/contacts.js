const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const {
  validateBody,
  isValidId,
  ifBodyIs,
  authenticate,
} = require("../../middlewares");

const { joiSchemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(joiSchemas.mainSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(joiSchemas.mainSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ifBodyIs,
  validateBody(joiSchemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
