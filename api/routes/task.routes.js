const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {
  getAllTasks,
  getOneTask,
  deleteTask,
  updateTask,
  createTask,
  getTasksByBoard
} = require("../controllers/task.controller");

router.get("/", checkAuth, getAllTasks);
router.post("/", checkAuth, createTask);
router.get("/:id", checkAuth, getOneTask);
router.put("/:id", checkAuth, updateTask);
router.delete("/:id", checkAuth, deleteTask);
module.exports = router;
