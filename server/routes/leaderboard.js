// Dependencies
const express = require("express");
const verifyUser = require("../config/passport").verifyUser;

// Express router
const router = express.Router();

// Leaderboard controller
const leaderboardController = require("../controllers/leaderboard");

// GET => /leaderboard
router.get("/", verifyUser, leaderboardController.getLeaderboard);

module.exports = router;