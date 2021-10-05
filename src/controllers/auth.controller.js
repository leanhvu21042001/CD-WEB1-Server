const AuthController = {};
const UserModel = require('../models/user.model');

AuthController.register = function (req, res, next) {
  return res.send("register");
}
AuthController.login = function (req, res, next) {
  return res.send("login");
}


module.exports = AuthController;