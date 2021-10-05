const express = require('express');
const router = express.Router();


// endpoint user with auth.
router.get('/:_userId', function (req, res) {
  return res.send("get user with user id");
});

router.delete('/:_userId', function (req, res) {
  return res.send("delete post with user id and post id");
});

router.patch('/:_userId', function (req, res) {
  return res.send("update post with user id and post id");
});

module.exports = router;