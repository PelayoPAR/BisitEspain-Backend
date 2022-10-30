const express = require("express");
const commentRouter = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const { Comment } = require("../models/Comment.model");
const { Landmark } = require("../models/Landmark.model");
const { Route } = require("../models/Route.model");

commentRouter.post("/create", isAuthenticated, (req, res) => {
  const { message, rating } = req.body;

  Comment.create({ message, rating, owner: req.payload._id })
    .then((createdComment) => res.json(createdComment))
    .catch((err) => {
      console.log("Could not create Comment");
    });
});

module.exports = commentRouter;
