const express = require("express");

const { validateBody } = require("../../middlewares");
const { authSchemas } = require("../../models/user");
const ctrl = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrl.register
);

module.exports = router;
