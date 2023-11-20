const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {
  getAllBoards,
  getOneBoard,
  deleteBoard,
  updateBoard,
  createBoard,
} = require("../controllers/board.controller");

router.get("/", checkAuth, getAllBoards);
router.post("/", checkAuth, createBoard);
router.get("/:id", checkAuth, getOneBoard);
router.put("/:id", checkAuth, updateBoard);
router.delete("/:id", checkAuth, deleteBoard);

module.exports = router;
