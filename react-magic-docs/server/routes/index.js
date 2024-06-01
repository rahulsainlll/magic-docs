const express = require("express");
const router = express.Router();

router.use("/", require("./all"));

router.use("/backend", require("./backend"));
// router.use("/frontend", require("./account"));

module.exports = router;
