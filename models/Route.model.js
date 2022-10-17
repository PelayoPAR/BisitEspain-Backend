const { Schema, model } = require("mongoose");
const { commentSchema } = require("./Comment.model");

const routeSchema = new Schema({
  name: {
    type: String,
  },
  // description: {
  // type: String,
  // }
  contentType: {
    type: String,
    default: "Route",
  },
  nodes: {
    type: Array,
  },
  comments: {
    type: [commentSchema],
    default: [],
  },
});

const Route = model("Route", routeSchema);

module.exports = { Route, routeSchema };
