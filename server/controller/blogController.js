const blogModel = require("../models/blogModel");

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

module.exports = { getBlogs, getBlogsByIds };
