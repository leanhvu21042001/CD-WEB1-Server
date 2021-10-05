const express = require('express');
const router = express.Router();

// endpoint posts without auth
router.get('/', function (req, res) {
  return res.json("get all posts");
});

router.get('/:id', function (req, res) {
  return res.send("get post by id");
});



// endpoint post with auth
router.get('/:_userId', function (req, res) {
  return res.send("get posts with user id");
});

router.get('/:id/:_userId', function (req, res) {
  return res.send("get post with user id and post id");
});

router.delete('/:id/:_userId', function (req, res) {
  return res.send("delete post with user id and post id");
});

router.patch('/:id/:_userId', function (req, res) {
  return res.send("update post with user id and post id");
});

router.post('/:id/:_userId', function (req, res) {
  return res.send("add post with user id and post id");
});

module.exports = router;