const projectModel = require("../models/projectModel");

// CONTROLLER - The controller contains logic that updates the model and/or view in response to input from the users of the app.
const getProjects = (req, res, next) => {
  projectModel
    .find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((data) => {
      console.log("Data: ", data);
    });
};

const getProjectsByIds = (req, res, next) => {
  projectModel
    .find({})
    .then((data) => {
      const newdata = data.find((n) => n._id === req.params.id);
      // console.log("Data: ", newdata);
      res.json(newdata);
    })
    .catch((data) => {
      console.log("Data: ", data);
    });
};

module.exports = { getProjects, getProjectsByIds };
