// Dependencies
const express = require("express");
const verifyUser = require("../config/passport").verifyUser;

// Express router
const router = express.Router();

// Todo controller
const todoController = require("../controllers/todo");

// GET => /todos
router.get("/", verifyUser, todoController.getTodos);

// POST => /todos/add-todo
router.post("/add-todo", verifyUser, todoController.postAddTodo);

// POST => /todos/delete-todo
router.post("/delete-todo", verifyUser, todoController.postDeleteTodo);

// POST => /todos/done-todo
router.post("/done-todo", verifyUser, todoController.postDoneTodo);

// POST => /todos/important-todo
router.post("/important-todo", verifyUser, todoController.postImportantTodo);

module.exports = router;