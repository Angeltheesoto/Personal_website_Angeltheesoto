const mongoose = require("mongoose");

// Schema --------
const Schema = mongoose.Schema;
const BlogSchema = new mongoose.Schema(
  {
    _id: { type: String },
    title: { type: String },
    topic: { type: String },
    desc: { type: String },
    text: { any: Object },
    coverImage: { type: String },
    images: { any: Object },
  },
  { timestamps: true }
);
// Schema --------

const BlogModel = mongoose.model("BlogModel", BlogSchema, "blogmodels");

module.exports = BlogModel;
