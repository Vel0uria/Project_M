const express = require("express");
const router = express.Router();
const {
  getStories,
  getOneStory,
  getPics,
  newStory,
  getOnePic,
  deletePic
} = require("../controllers/apiController");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/stories", getStories);
router.get("/stories/:id", getOneStory);
router.get("/pics", getPics);
router.get("/pics/:id", getOnePic);
router.delete("/pics/:id", deletePic);
router.post("/newstory", newStory);

module.exports = router;
