const mongoose = require("mongoose");
const ProjectSchema = require("./projecSchema");

// MODEL - The model defines what data the app should contain
const ProjectModel = mongoose.model("ProjectModel", ProjectSchema);

// Save data to our mongo database
const data = {
  _id: "1",
  title: "Test Title",
};

// Instance of the model
const newProjectModel = new ProjectModel(data);

newProjectModel.save((error) => {
  if (error) {
    console.log("Oops, something happened");
  } else {
    console.log("Data has been saved!");
  }
});

module.exports = ProjectModel;
