const express = require("express");
const router = express.Router();
const getProject = require("../controller/projectController");
const getProjectsById = require("../controller/projectController");

router.get("/projects", getProject.getProjects);
router.get("/projects/:id", getProjectsById.getProjectsByIds);

module.exports = router;
