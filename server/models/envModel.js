const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EnvSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  content: { type: String },
});

// Mongoose add the ability to specify a collection as the third argument.
const EnvModel = mongoose.model("EnvSchema", EnvSchema, "envmodel");

module.exports = EnvModel;
