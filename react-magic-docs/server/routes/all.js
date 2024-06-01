const express = require("express");
const Docs = require("../schema");
const router = express.Router();

// Fetch all documents
router.get("/", async (req, res) => {
  try {
    const docs = await Docs.find().sort({ createdAt: "desc" });
    res.json(docs);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Create a new document
router.post("/", async (req, res) => {
  const doc = new Docs({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });

  try {
    const newDoc = await doc.save();
    res.status(201).json(newDoc);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Fetch a single document by slug
router.get("/:slug", async (req, res) => {
  try {
    const doc = await Docs.findOne({ slug: req.params.slug });
    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json(doc);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Update a document
router.put("/:id", async (req, res) => {
  try {
    let doc = await Docs.findById(req.params.id);
    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    doc.title = req.body.title;
    doc.description = req.body.description;
    doc.markdown = req.body.markdown;
    // Note: slug and sanitizedHtml will be automatically updated by pre-validate hook
    await doc.save();

    res.json(doc);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Delete a document
router.delete("/:id", async (req, res) => {
  try {
    await Docs.findByIdAndDelete(req.params.id);
    res.json({ message: "Document deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
