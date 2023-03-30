const blogModel = require("../models/blogModel");

// this posts a blog
const postBlog = async (req, res, next) => {
  try {
    const newBlog = await blogModel.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// This gets all blogs
const getBlogs = (req, res, next) => {
  blogModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

// this gets blog by id
const getBlogsByIds = (req, res, next) => {
  blogModel
    .find({})
    .then((data) => {
      const newdata = data.find((n) => n._id === req.params.id);
      res.json(newdata);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

module.exports = { getBlogs, getBlogsByIds, postBlog };
