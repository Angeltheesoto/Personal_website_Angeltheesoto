// DEPENDENCIES ---
const express = require("express");
// const router = express.Router();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// FILES ---
const connectDB = require("./config/db");
// const projectController = require("./controller/projectController");

// VARIABLES & FUNCTIONS ---
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
dotenv.config();
connectDB();
app.use(cors());
// projectController();

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
const ProjectModel = mongoose.model("ProjectModel", ProjectSchema);

// Test data to be sent --
// const data = {
//   _id: "1",
//   title: "Test Title",
// };

// Instance of the model
// const newProjectModel = new ProjectModel(data);

// Save data - log if data has been sent.
// newProjectModel.save((error) => {
//   if (error) {
//     console.log("Oops, something happened");
//   } else {
//     console.log("Data has been saved!");
//   }
// });
// Model --------------

// ROUTES -------------
// root route - homepage
// app.get("/", (req, res) => {
//   res.send("API is running..");
// });

// project route -----------
app.get("/project", (req, res) => {
  // res.send(notes);
  ProjectModel.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((data) => {
      console.log("Data: ", data);
    });
});

// project id route ----------
app.get("/project/:id", (req, res) => {
  ProjectModel.find({})
    .then((data) => {
      // console.log("Data: ", data);
      const newdata = data.find((n) => n._id === req.params.id);
      res.json(newdata);
    })
    .catch((data) => {
      console.log("Data: ", data);
    });
});
// ROUTES -------------

// DEPLOYMENT --------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// DEPLOYMENT --------------

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
