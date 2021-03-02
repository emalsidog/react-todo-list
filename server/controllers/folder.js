// Dependencies
const User = require("../models/User");
const Folder = require("../models/Folder");
const Todo = require("../models/Todo");

// GET => /
exports.getFolders = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id })
      .populate("folders")
      .exec();
    res.status(200).json({
      isError: false,
      message: "Operation successfull.",
      body: {
        folders: user.folders,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

// POST => /create-folder
exports.postCreateFolder = async (req, res) => {
  const { title } = req.body;
  const folder = new Folder({
    title,
  });
  try {
    await folder.save();
    req.user.folders.push(folder);
    await req.user.save();
    res.status(200).json({
      isError: false,
      message: "Folder created.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

// GET => /delete-folder
exports.getDeleteFolder = async (req, res) => {
  const folderId = req.params.id;
  req.user.folders = req.user.folders.filter(({ _id }) => _id.toString() !== folderId.toString());
  try {
    await req.user.save();
    await Folder.findOneAndDelete({ _id: folderId });

    res.status(200).json({
      isError: false,
      message: "Operation successfull."
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
}

// GET => /:id
exports.getTodos = async (req, res) => {
  const folderId = req.params.id;

  checkIfUserHasFolder(folderId, req.user, res);

  try {
    const { todos, title } = await Folder.findOne({ _id: folderId })
      .populate("todos")
      .exec();
    res.status(200).json({
      isError: false,
      message: "Operation successfull.",
      body: {
        todos,
        title,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

// POST => /:id/add-todo
exports.postAddTodo = async (req, res) => {
  const { content } = req.body;
  const folderId = req.params.id;

  checkIfUserHasFolder(folderId, req.user, res);

  if (!content) {
    return res.status(400).json({
      isError: true,
      message: "Todo cannot be empty",
    });
  }

  const todo = new Todo({
    content,
  });

  try {
    await todo.save();

    const folder = await Folder.findOne({ _id: folderId });
    folder.todos.push(todo);
    await folder.save();

    res.status(200).json({
      isError: false,
      message: "Successfully added todo.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

// POST => /:id/delete-todo
exports.postDeleteTodo = async (req, res) => {
  const { id } = req.body;
  const folderId = req.params.id;

  checkIfUserHasFolder(folderId, req.user, res);

  try {
    const folder = await Folder.findOne({ _id: folderId });
    folder.todos = folder.todos.filter(
      ({ _id }) => _id.toString() !== id.toString()
    );

    await folder.save();
    await Todo.findOneAndDelete({ _id: id });

    res.status(200).json({
      isError: false,
      message: "Successfully deleted todo.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

const checkIfUserHasFolder = (folderId, user, res) => {
  if (!user.folders.includes(folderId.toString())) {
    return res.status(400).json({
      isError: true,
      message: "No such folder",
    });
  }
};

// POST => /:id/done-todo
exports.postDoneTodo = async (req, res) => {
  const { id } = req.body;
  const points = Math.floor(Math.random() * (11 - 5) + 5);
  req.user.points += points;
  req.user.totalCompletedTodos += 1;
  try {
    const todo = await Todo.findOne({ _id: id });
    todo.isCompleted = true;

    await req.user.save();
    await todo.save();

    res.status(200).json({
      isError: false,
      message: "Completed.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};

// POST => /:id/important-todo
exports.postImportantTodo = async (req, res) => {
  const { id } = req.body;
  try {
    const todo = await Todo.findOne({ _id: id });
    todo.isImportant = !todo.isImportant;

    await todo.save();

    res.status(200).json({
      isError: false,
      message: "Marked as important.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      isError: true,
      message: "Something went wrong...",
    });
  }
};
