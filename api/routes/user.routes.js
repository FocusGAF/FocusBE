const router = require("express").Router();
const { checkAuth } = require("../middlewares/index");
const {getMyProfile, getAllUsers} = require("../controllers/user.controller")
router.get("/myProfile", checkAuth, getMyProfile)
router.get("/", checkAuth, getAllUsers)
module.exports= router