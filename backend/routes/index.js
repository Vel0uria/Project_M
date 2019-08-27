const express = require("express");
const router = express.Router();
const { getStories } = require("../controllers/apiController");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/stories", getStories);

module.exports = router;
