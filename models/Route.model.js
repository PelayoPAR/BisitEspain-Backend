const { Schema, model } = require("mongoose");
const { commentSchema } = require("./Comment.model");

const routeSchema = new Schema({
  name: {
    type: String,
  },
  contentType: {
    type: String,
    default: "Route",
  },
  category: {
    type: String,
    enum: ["Urban", "Rural", "Coastal"],
  },
  nodes: {
    type: Array,
    positions: [
      {
        latitude: Number,
        longitude: Number,
      },
    ],
  },
  comments: {
    type: [commentSchema],
    default: [],
  },
});

// {
//   type: "Feature",
//   properties: {},
//   geometry: {
//     type: "LineString",
//     coordinates: [
//       [-5.993348, 37.386016],
//       [-5.986878, 37.37729],
//     ],
//   },
// };

const Route = model("Route", routeSchema);

module.exports = { Route, routeSchema };
