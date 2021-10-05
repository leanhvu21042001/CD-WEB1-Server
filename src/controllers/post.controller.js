const PostController = {}
const PostModel = require('../models/post.model');


// Control posts without auth
PostController.getAllPosts = function (req, res, next) {
  return res.json("get all posts");
}

PostController.getOnePostById = function (req, res, next) {
  return res.send("get post by id");
}


// Control posts with auth
PostController.getAllPostsByUserID = function (req, res, next) {
  return res.send("get posts with user id");
}

PostController.getOnePostByIdAndUserID = function (req, res, next) {
  return res.send("get post with user id and post id");
}

PostController.addPostByUserID = function (req, res, next) {
  return res.send("add post with user id and post id");
}

PostController.deletePostByIdAndUserID = function (req, res, next) {
  return res.send("delete post with user id and post id");
}

PostController.updatePostByIdAndUserID = function (req, res, next) {
  return res.send("update post with user id and post id");
}


module.exports = PostController;