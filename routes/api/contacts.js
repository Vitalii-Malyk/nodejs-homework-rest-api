const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, ifBodyIs } = require("../../middlewares");

const { joiSchemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(joiSchemas.mainSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(joiSchemas.mainSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  ifBodyIs,
  validateBody(joiSchemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
