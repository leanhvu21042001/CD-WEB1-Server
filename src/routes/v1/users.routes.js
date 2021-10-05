const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller')

// endpoint user with auth.
router.get('/:_userId', UserController.getOneUserById);

router.delete('/:_userId', UserController.deleteUserById);

router.patch('/:_userId', UserController.updateUserById);

module.exports = router;