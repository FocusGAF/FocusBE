const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {getMyProfile, getAllUsers, getOneUser, deleteUser, updateUser, createUser} = require("../controllers/user.controller")
router.get("/myProfile", checkAuth, getMyProfile)
router.get("/", checkAuth, getAllUsers)
router.post("/", checkAuth, createUser)
router.get("/:id", checkAuth, getOneUser)
router.put("/:id", checkAuth, updateUser)
router.delete("/:id", checkAuth, deleteUser)

module.exports= router