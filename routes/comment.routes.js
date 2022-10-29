const express = require("express");
const commentRouter = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");

commentRouter.post("/create", isAuthenticated, (req, res) => {
  const { message, rating } = req.body;

  Comment.create({ message, rating, owner })
    .then((createdComment) => res.json(createdComment))
    .catch((err) => {
      console.log("Could not create Comment");
    });
});

module.exports = commentRouter;
