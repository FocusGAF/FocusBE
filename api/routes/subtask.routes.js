const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {
  getAllSubtasks,
  getOneSubtask,
  deleteSubtask,
  updateSubtask,
  createSubtask,
} = require("../controllers/subtask.controller");

router.get("/", checkAuth, getAllSubtasks);
router.post("/", checkAuth, createSubtask);
router.get("/:id", checkAuth, getOneSubtask);
router.put("/:id", checkAuth, updateSubtask);
router.delete("/:id", checkAuth, deleteSubtask);

module.exports = router;
