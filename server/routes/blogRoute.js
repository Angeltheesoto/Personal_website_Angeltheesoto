const express = require("express");
const router = express.Router();
const getBlogs = require("../controller/blogController");
const getBlogsByIds = require("../controller/blogController");

router.get("/blog", getBlogs.getBlogs);
router.get("/blogs/:id", getBlogsByIds.getBlogsByIds);

module.exports = router;
