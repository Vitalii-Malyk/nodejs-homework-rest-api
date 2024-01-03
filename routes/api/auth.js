const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");
const { authSchemas } = require("../../models/user");
const ctrl = require("../../controllers");

const router = express.Router();

// signup

router.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  ctrl.register
);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(authSchemas.emailSchema),
  ctrl.resendVerifyEmail
);

// signIn

router.post("/login", validateBody(authSchemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
