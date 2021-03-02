// Dependencies
const express = require("express");
const verifyUser = require("../config/passport").verifyUser;

// Express router
const router = express.Router();

// Folder controller
const FolderController = require("../controllers/folder");

// GET => /
router.get("/", verifyUser, FolderController.getFolders);

// GET => /:id
router.get("/:id", verifyUser, FolderController.getTodos);

// POST => /create-folder
router.post("/create-folder", verifyUser, FolderController.postCreateFolder);

// POST => /:id/add-todo
router.post("/:id/add-todo", verifyUser, FolderController.postAddTodo);

// POST => /:id/delete-todo
router.post("/:id/delete-todo", verifyUser, FolderController.postDeleteTodo);

// POST => /:id/done-todo
router.post("/:id/done-todo", verifyUser, FolderController.postDoneTodo);

// POST => /:id/important-todo
router.post("/:id/important-todo", verifyUser, FolderController.postImportantTodo);

// GET => /:id/delete-folder
router.get("/:id/delete-folder", verifyUser, FolderController.getDeleteFolder);

module.exports = router;