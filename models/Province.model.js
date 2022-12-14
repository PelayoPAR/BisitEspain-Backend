const { Schema, model } = require("mongoose");
const { landmarkSchema } = require("./Landmark.model");
const { routeSchema } = require("./Route.model");

const provinceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  contents: {
    landmarks: { type: [landmarkSchema], default: [] },
    routes: { type: [routeSchema], default: [] },
  },
  URL: {
    type: String,
    default: "",
  },
  center: {
    latitude: Number,
    longitude: Number,
  },
});

const Province = model("Province", provinceSchema);

module.exports = { Province, provinceSchema };
