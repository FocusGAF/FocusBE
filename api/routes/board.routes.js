const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const { getAllBoards, getOneBoard, deleteBoard, updateBoard, createBoard } = require("../controllers/board.controller")

router.get("/", getAllBoards)
router.post("/", createBoard)
router.get("/:id", getOneBoard)
router.put("/:id", updateBoard)
router.delete("/:id", deleteBoard)

module.exports = router