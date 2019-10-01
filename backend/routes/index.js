const express = require("express");
const router = express.Router();
const {
  getStories,
  getOneStory,
  getPics
} = require("../controllers/apiController");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/stories", getStories);
router.get("/stories/:id", getOneStory);
router.get("/pics", getPics);

module.exports = router;
