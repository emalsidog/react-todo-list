// Dependencies
const express = require("express");
const verifyUser = require("../config/passport").verifyUser;
const passport = require("passport");

// Express router
const router = express.Router();

// Auth controller
const authController = require("../controllers/auth");

// POST => /accounts/register/
router.post("/register", authController.postRegister);

// POST => /accounts/login
router.post("/login", passport.authenticate("local", { session: false }), authController.postLogin);

// GET => /accounts/authenticated
router.get("/authenticated", verifyUser, authController.getAuthenticated);

// POST => /accounts/google
router.post("/google", authController.postGoogle);

module.exports = router;