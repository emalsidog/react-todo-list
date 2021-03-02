// Dependencies
const passportConfig = require("../config/passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// OAuth2 Client
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("1051398545639-mpgsb6eo4esvtvttqq7m9ts6g0du0hb3.apps.googleusercontent.com");

// Rexexp
const emailRexexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRexexp = /^[a-zA-Zа-яёА-ЯЁ]+$/;
const passwordRexexp = /^[0-9A-Za-z-_]+$/;

// POST => /accounts/register/
exports.postRegister = async (req, res) => {
  const {
    email,
    password,
    passwordConfirm,
    givenName,
    familyName,
  } = req.body;

  if(givenName.length <= 1 || givenName.length > 15) {
    return res.status(400).json({
      isError: true,
      message: "Given name must be between 2 and 15 characters long"
    });
  } else if(familyName.length <= 1 || familyName.length > 15) {
    return res.status(400).json({
      isError: true,
      message: "Family name must be between 2 and 15 characters long"
    });
  } else if(!nameRexexp.test(givenName)) {
    return res.status(400).json({
      isError: true,
      message: "Given name must be only letters"
    });
  } else if(!nameRexexp.test(familyName)) {
    return res.status(400).json({
      isError: true,
      message: "Family name must be only letters"
    });
  }

  if(password.length < 6 || password.length > 15) {
    return res.status(400).json({
      isError: true,
      message: "Password must be between 6 and 15 characters long"
    });
  } else if(!passwordRexexp.test(password)) {
    return res.status(400).json({
      isError: true,
      message: "Password must be only letters and numbers and special characters (-, _)"
    });
  } else if(password.toString() !== passwordConfirm.toString()) {
    return res.status(400).json({
      isError: true,
      message: "Passwords do not match"
    });
  }

  if(!emailRexexp.test(email)){
    return res.status(400).json({
      isError: true,
      message: "Email is not valid"
    });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        isError: true,
        message: "Email is already registered",
      });
    }
    const newUser = new User({
      email,
      password,
      givenName,
      familyName,
      provider: "Local"
    });
    
    const passwordHash = await bcrypt.hash(password, 10);
    newUser.password = passwordHash;

    await newUser.save();

    return res.status(201).json({
      isError: false,
      message: "Your account has been successfully created. Redirecting to log in page...",
    });
  } catch (error) {
    return res.status(500).json({
      isError: true,
      message: "Something went wrong... Please, try again later",
    });
  }
}

// POST => /accounts/login
exports.postLogin = (req, res) => {
  const { _id, email, givenName, familyName } = req.user;
  const token = passportConfig.getToken({ _id });
  return res.status(200).json({
    isError: false,
    message: "Successfully logged in.",
    body: {
      isAuthenticated: true,
      user: { email, givenName, familyName },
      token
    },
  });
}

// GET => /accounts/authenticated
exports.getAuthenticated = (req, res) => {
  const { email, givenName, familyName } = req.user;
  return res.status(200).json({
    isError: false,
    message: "",
    body: {
      isAuthenticated: true,
      user: { email, givenName, familyName }
    }
  });
}

// POST => /accounts/google
exports.postGoogle = async (req, res) => {
  const { token } = req.body
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "1051398545639-mpgsb6eo4esvtvttqq7m9ts6g0du0hb3.apps.googleusercontent.com"
    });
    const { given_name: givenName, family_name: familyName, email } = ticket.getPayload();  

    const user = await User.findOne({ email });

    if(!user) {
      const newUser = new User({
        email,
        givenName,
        familyName,
        provider: "Google"
      });

      await newUser.save();

      const token = passportConfig.getToken({ _id: newUser._id });

      return res.status(201).json({
        isError: false,
        message: "Successfully logged in.",
        body: {
          isAuthenticated: true,
          user: { email, givenName, familyName },
          token
        }
      });
    } else {
      const { _id, givenName, familyName, email } = user;
      const token = passportConfig.getToken({ _id });

      return res.status(200).json({
        isError: false,
        message: "Successfully logged in.",
        body: {
          isAuthenticated: true,
          user: { email, givenName, familyName },
          token
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      isError: true,
      message: "Something went wrong... Please, try again later.",
    });
  }
}