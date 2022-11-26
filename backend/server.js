// dependencies
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());
// root route - homepage
app.get("/", (req, res) => {
  res.send("API is running..");
});

// blank
app.get("/project", (req, res) => {
  res.json(notes);
});

// project id route
app.get("/project/:id", (req, res) => {
  const data = notes.find((n) => n._id === req.params.id);
  res.send(data);
});

//wild card route
// app.get("*", (req, res) => {
//   res.status(404).send(`<div style='
//                background-color: blue;
//                height: 50%;
//                width: 50%;
//                border-radius: 10px;
//                margin-left: 25%;
//                margin-top: 25%;
//                ' >
//                <div
//                style=' color: white;
//                text-align: center;

//                ' >
//                  <h1>404</h1>
//                  <h2>Page Not Found</h2>
//                  <h3>this page doesn't exist </h3>
//                </div>

//              </div>

//              `);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
