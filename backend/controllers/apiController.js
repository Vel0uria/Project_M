const Story = require("../models/historia");

exports.getStories = (req, res) => {
  Story.find()
    .then(stories => res.status(200).json({ stories }))
    .catch(err => res.status(500).json(err));
};
