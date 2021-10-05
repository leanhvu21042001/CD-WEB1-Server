const express = require('express');
const router = express.Router();

const posts = require('./posts.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');

// route v1
router.use("/posts", posts);
router.use("/users", users);
router.use("/auth", auth);


module.exports = router;