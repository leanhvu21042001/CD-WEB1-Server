const express = require('express');
const router = express.Router();


// endpoint user with auth.

router.post('/register', function (req, res) {
  return res.send("register");
});

router.post('/login', function (req, res) {
  return res.send("login");
});

module.exports = router;