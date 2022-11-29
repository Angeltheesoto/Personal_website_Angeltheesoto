const router = require("express").Router();

// CONTROLLER - The controller contains logic that updates the model and/or view in response to input from the users of the app.
const projectModel = require("../models/projectModel");

router.get("/", (req, res) => {
  projectModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ meesage: error });
    });
});
