const mongoose = require("mongoose");

// SCHEMA - A database schema is considered the “blueprint” of a database which describes how the data may relate to other tables or other data models.
const ProjectSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
});

module.exports = mongoose.model("projects", ProjectSchema);
