const router = require("express").Router();
router.use("", require("./auth.routes.js"));
router.use("/users", require("./user.routes.js"));
router.use("/tasks", require("./task.routes.js"));

module.exports = router;
