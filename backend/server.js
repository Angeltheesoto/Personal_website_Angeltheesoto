// dependencies
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.use(cors());
// root route - homepage
app.get("/", (req, res) => {
  res.send("API is running..");
});

// blank
app.get("/project", (req, res) => {
  res.json(notes);
  res.send(notes);
});

// project id route
app.get("/project/:id", (req, res) => {
  const data = notes.find((n) => n._id === req.params.id);
  res.send(data);
});

//wild card route
// app.get("*", (req, res) => {
//   res.status(404).send(`Error 404 : page not found`);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
