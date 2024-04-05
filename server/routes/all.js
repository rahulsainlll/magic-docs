const express = require("express");
const router = express.Router();

// test
router.get("/", async (req, res) => {
  res.send("ALL");
});

module.exports = router;
