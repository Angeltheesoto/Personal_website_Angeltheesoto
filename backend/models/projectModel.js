const mongoose = require("mongoose");

// Schema --------------
const Schema = mongoose.Schema;
const ProjectSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  content: { type: String },
  category: { type: String },
  link: { type: String },
  imgOne: { type: String },
  imgTwo: { type: String },
  imgThree: { type: String },
});

// Schema --------------

// Model --------------
const ProjectModel = mongoose.model(
  "ProjectModel",
  ProjectSchema,
  "projectmodels"
);

module.exports = ProjectModel;
