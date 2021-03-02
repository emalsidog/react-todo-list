const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    max: 15
  },
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  provider: {
    type: String
  },
  points: {
    type: Number,
    default: 0
  },
  totalCompletedTodos: {
    type: Number,
    default: 0
  },
  folders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
  registrationDate: {
    type: Date,
    default: new Date()
  }
});

UserSchema.methods.comparePasswords = function(password, done) {
  bcrypt.compare(password, this.password, (error, isMatch) => {
    if(error)
      return done(error);
    if(!isMatch) {
      return done(null, isMatch)
    }
    return done(null, this);
  });
}

module.exports = mongoose.model("User", UserSchema);