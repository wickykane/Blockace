const express = require('express');
const controller = require('../../controllers/medium-blog.controller');

const router = express.Router();
router.route('/blog')
.get(controller.getListBlog);

module.exports = router;