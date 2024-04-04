const express = require("express");
const router = express.Router();

// test
router.get("/", async (req, res) => {
  res.send("running");
});

module.exports = router;
