const mongoose = require("mongoose");

// Schema --------
const Schema = mongoose.Schema;
const BlogSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, min: 3, max: 60, required: true },
    topic: { type: String, required: true },
    desc: { type: String, min: 3, max: 150, required: true },
    dateCreated: { type: String },
    paragraphs: [
      {
        subHeading: String,
        text: [String],
        imgSubHeading: String,
        img: String,
        listSubHeading: String,
        list: [String],
        linksSubHeading: String,
        links: [String],
        code: String,
        language: String,
      },
    ],
    coverImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// Schema --------

const BlogModel = mongoose.model("BlogSchema", BlogSchema, "blogmodel");

module.exports = BlogModel;
