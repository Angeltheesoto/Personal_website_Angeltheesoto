// DEPENDENCIES ---
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// FILES ---
const connectDB = require("./config/db");
const connectApiDB = require("./config/envdb");
const routes = require("./routes/projectRoute");
// This is test data to be sent to front end.
// const data = require("./data/data");

// VARIABLES & FUNCTIONS ---
dotenv.config();
connectDB();
connectApiDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// ROUTES ---
app.use("/", routes);
app.use("/:id", routes);
app.use("/API", routes);
// This is test data route.
// app.get("/API", (req, res) => {
//   res.json("API DATA HERE");
// });

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
