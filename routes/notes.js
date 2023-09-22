const express = require("express").Router();
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Failed to read notes." });
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
