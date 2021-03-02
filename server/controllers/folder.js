// Dependencies
const User = require("../models/User");
const Folder = require("../models/Folder");

// GET => /
exports.getFolders = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id }).populate("folders").exec();
  console.log(user);
  // Send folders to client if no error
  // If error => send error to user
}

// POST => /create-folder
exports.postCreateFolder = (req, res) => {
  const { title } = req.body;
  const folder = new Folder({
    title
  });
  // Save folder
  // Push folder to user`s folder array
  // Save user
}