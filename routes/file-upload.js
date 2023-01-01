const express = require("express");
const multer = require("multer");
const router = express.Router();
const FILE_PATH = "uploads";
const upload = multer({
  dest: `${FILE_PATH}/`,
});

router.route("/").post(upload.single("upfile"), (req, res) => {
  const upFile = req.file;
  res.json({ name: upFile.originalname, type: upFile.mimetype, size: upFile.size });
});

module.exports = router;