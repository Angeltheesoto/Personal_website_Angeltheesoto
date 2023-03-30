const express = require("express");
const router = express.Router();
const postBlog = require("../controller/blogController");
const getBlogs = require("../controller/blogController");
const getBlogsByIds = require("../controller/blogController");

router.post("/blog", postBlog.postBlog);
router.get("/blog", getBlogs.getBlogs);
router.get("/blog/:id", getBlogsByIds.getBlogsByIds);

module.exports = router;
