const { model, Schema } = require("mongoose");

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: false,
    versionKey: false
  }
);

module.exports = model("Story", storySchema);
