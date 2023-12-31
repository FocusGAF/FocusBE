const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {
  getAllProjects,
  getOneProject,
  deleteProject,
  updateProject,
  createProject,
  getProjectByInvCode,
} = require("../controllers/project.controller");
router.get("/", checkAuth, getAllProjects);
router.post("/", checkAuth, createProject);
router.get("/:id", checkAuth, getOneProject);
router.get("/invite/:id", checkAuth, getProjectByInvCode);
router.put("/:id", checkAuth, updateProject);
router.delete("/:id", checkAuth, deleteProject);
module.exports = router;
