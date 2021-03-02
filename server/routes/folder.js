// Dependencies
const express = require("express");
const verifyUser = require("../config/passport").verifyUser;

// Express router
const router = express.Router();

// Folder controller
const FolderController = require("../controllers/folder");

// GET => /
router.get("/", verifyUser, FolderController.getFolders);

// POST => /create-folder
router.post("/create-folder", verifyUser, FolderController.postCreateFolder);

module.exports = router;