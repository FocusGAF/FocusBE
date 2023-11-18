const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {getOneUser, getAllUsers} = require("../controllers/user.controller")
router.get("/:id", checkAuth, getOneUser)
router.get("/", checkAuth, getAllUsers)
module.exports= router