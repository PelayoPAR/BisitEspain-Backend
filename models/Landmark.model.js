const { Schema, model } = require("mongoose");
const { commentSchema } = require("./Comment.model");

const landmarkSchema = new Schema({
  name: {
    type: String,
  },
  // description: {
  // type: String,
  // }
  contentType: {
    type: String,
    default: "Landmark",
  },
  // contentFamily: {
  //   type: Enumerator,

  // }
  // Province ?
  position: {
    x: String,
    y: String,
  },
  comments: {
    type: [commentSchema],
    default: [],
  },
});

const Landmark = model("Landmark", landmarkSchema);

module.exports = { Landmark, landmarkSchema };
