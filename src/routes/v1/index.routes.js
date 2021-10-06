const express = require('express');
const router = express.Router();

const posts = require('./posts.routes');
const users = require('./users.routes');
const auth = require('./auth.routes');
const verifyJWT = require('../../middlewares/verifyJWT');

// route v1
router.use("/posts", verifyJWT, posts);
router.use("/users", users);
router.use("/auth", auth);


module.exports = router;