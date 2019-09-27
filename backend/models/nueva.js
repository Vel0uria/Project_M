const { model, Schema } = require("mongoose");

const newStory = new Schema(
  {
    ruta: {
      type: String,
      required: true
    }
  },

  { timestamps: false, versionKey: false }
);
module.exports = model("newStory", storySchema);
