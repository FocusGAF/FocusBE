const router = require("express").Router();
router.use("", require("./auth.routes.js"));
router.use("/users", require("./user.routes.js"));
router.use("/boards", require("./board.routes.js"));

module.exports = router;
