const express = require('express');
const router = express.Router();

const PostController = require('../../controllers/post.controller');

// endpoint posts without auth
router.get('/', PostController.getAllPosts);

router.get('/:id', PostController.getOnePostById);


// endpoint post with auth
router.get('/:_userId', PostController.getAllPostsByUserID);

router.get('/:id/:_userId', PostController.getOnePostByIdAndUserID);

router.post('/:id/:_userId', PostController.addPostByUserID);

router.delete('/:id/:_userId', PostController.deletePostByIdAndUserID);

router.patch('/:id/:_userId', PostController.updatePostByIdAndUserID);


module.exports = router;