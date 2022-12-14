const { Schema, model } = require("mongoose")
const { commentSchema } = require("./Comment.model")

const landmarkSchema = new Schema({
  name: {
    type: String,
  },
  contentType: {
    type: String,
    default: "Landmark",
  },
  category: {
    type: String,
    enum: ["Urban", "Rural", "Coastal"],
  },
  position: {
    latitude: Number,
    longitude: Number,
  },
  URL: {
    type: String,
    default: "",
  },
  images: {
    type: Array,
    default: [],
  },
  description: {
    type: String,
    default: "",
  },
  comments: {
    type: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    default: [],
  },
})

const Landmark = model("Landmark", landmarkSchema)

module.exports = { Landmark, landmarkSchema }
