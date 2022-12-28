const express = require("express");
const router = express.Router();
const getProject = require("../controller/projectController");
const getProjectsById = require("../controller/projectController");

router.get("/project", getProject.getProjects);
router.get("/project/:id", getProjectsById.getProjectsByIds);

module.exports = router;
