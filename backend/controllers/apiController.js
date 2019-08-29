const Story = require("../models/historia");

exports.getStories = (req, res) => {
  Story.find()
    .then(stories => res.status(200).json({ stories }))
    .catch(err => res.status(500).json(err));
};

exports.getOneStory = (req, res) => {
  const { id } = req.params;
  Story.findById(id)
    .then(story => res.status(200).json({ story }))
    .catch(err => res.status(500).json(err));
};
