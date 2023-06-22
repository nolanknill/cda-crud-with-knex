const router = require('express').Router();
const postController = require('../controllers/post-controller');

router
    .route('/')
    .get(postController.index);

router
    .route('/:id')
    .get(postController.findOne)

module.exports = router;