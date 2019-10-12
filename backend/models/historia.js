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
    //hora en la que se crea un nuevo modelo
    versionKey: false
  }
);

module.exports = model("Story", storySchema);
