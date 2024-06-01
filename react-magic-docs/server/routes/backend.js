const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// test
router.get("/", async (req, res) => {
  res.send("running");
});

router.get("/slugs", async (req, res) => {
  const folder = path.join(__dirname, "..", "markdown");
  try {
    const files = await fs.promises.readdir(folder);
    const markdownDocs = files.filter((file) => file.endsWith(".md"));
    const slugs = markdownDocs.map((file) => file.replace(".md", ""));
    res.send(slugs);
  } catch (error) {
     return res.json({
       error: "Failed to retrieve document slugs.",
     });
  }
});


module.exports = router;
