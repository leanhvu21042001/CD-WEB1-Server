const UserController = {}
const UserModel = require('../models/user.model')


// UserController.addUser = function (req, res, next) { }

UserController.getOneUserById = function (req, res, next) {
  return res.send("update post with user id and post id");
}

UserController.deleteUserById = function (req, res, next) {
  return res.send("get user with user id");
}

UserController.updateUserById = function (req, res, next) {
  return res.send("delete post with user id and post id");
}

// UserController.getAllUsers = function (req, res, next) { }

module.exports = UserController;