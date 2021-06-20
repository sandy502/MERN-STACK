const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const user = require("../modelsblog/usermod");
const blogs = require("../modelsblog/blogmod")
const HttpError = require("../utilitiesblog/http-error");

const userSignup = async (req, res, next) => {
  const { firstname, lastname, email, password, dob } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed, please try later", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("user already exists.", 480);
    return next(error);
  }

  //encrypt password
  let hashedpassword;
  try {
    hashedpassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("password encryption failed", 475);
    return next(error);
  }
  //user created
  const createUser = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedpassword,
    dob: dob,
    role: "User",
  });

  try {
    await createUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("signup failed", 500);
    return next(error);
  }

  res.status(200).json({ message: "user signed up successfully" });
};

//User login function
const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  //checking whether the user already exists or not
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Invalid credentials", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("user doesn't exist!!!", 590);
    return next(error);
  }

  //checking validity of passwords
  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Login failed, please try later", 560);
    return next(error);
  }
  if (!isValidPassword) {
    const error = new HttpError("Invalid credentials", 590);
    return next(error);
  }

  res.status(200).json({
    firstname: existingUser.firstname,
    lastname: existingUser.lastname,
    email: existingUser.email,
  });
};

//User get information function
const userGetInfo = async (req, res, next) => {
  console.log(req.query);
  console.log(req.params);
  res.json({
    user: {
      firstname: "sandaly",
      lastname: "singh",
      email: "something@gmail.com",
    }
  });
};

//User Blog posts creation function
const userPosts = (req, res, next) => {
    const {heading , blog , userId} = req.body;
   return res.create();
};

//User previously created posts function
const userBlog = (req, res, next) => {

  //we are requesting user to provide information
  return res.json({
    "heading": `${req.blogs.heading}`,
    "blog": `${req.blogs.blog}`,
   "message": `Post created by user ${req.blogs.userId}`
 });
};

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;
exports.userPosts = userPosts;
exports.userGetBlog = userBlog;
