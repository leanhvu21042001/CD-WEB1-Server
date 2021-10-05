const db = require('../utils/db');

const TBL_NAME_USER = "users";
const COL_NAME_USER_ID = "user_id";
const COL_NAME_NAME = "name";
const COL_NAME_AGE = "age";
const COL_NAME_EMAIL = "email";
const COL_NAME_USERNAME = "username";
const COL_NAME_HASH_PASSWORD = "hash_password";
const COL_NAME_IS_ACTIVE = "is_active";
const COL_NAME_ROLE = "role";

const UserModel = {};

UserModel.addUser = function () { }

UserModel.deleteUserById = function () { }

UserModel.updateUserById = function () { }

UserModel.getOneUserById = function () { }

UserModel.getAllUsers = function () { }

module.exports = UserModel;