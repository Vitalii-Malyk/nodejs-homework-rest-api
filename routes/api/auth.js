const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");
const { authSchemas } = require("../../models/user");
const ctrl = require("../../controllers");

const router = express.Router();

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrl.register
);

router.post("/login", validateBody(authSchemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
