const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares/validateBody");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

// router.post("/", validateBody(schemas.schema), ctrl.add);

// router.delete("/:contactId", ctrl.deleteById);

// router.put("/:contactId", validateBody(schemas.schema), ctrl.updateById);

module.exports = router;
