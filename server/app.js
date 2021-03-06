// Dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// Models
const Todo = require("./models/Todo");
const User = require("./models/User");
const Folder = require("./models/Folder");

// App
const app = express();

// CORS
app.use(cors());

// Cookie parser
app.use(cookieParser());

// Body parser
app.use(express.json());

// Routes
app.use("/accounts", require("./routes/auth"));
app.use("/leaderboard", require("./routes/leaderboard"));
app.use("/", require("./routes/folder"));

// MongoDB connection
mongoose.connect("mongodb+srv://root:root@cluster.09gqa.mongodb.net/react-todo-list?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log("Successfully connected to database."))
  .catch(error => console.log(`Error: ${error}`));

// Server startup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running (Port: ${PORT})`);
});