const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const { commentSchema } = require("../models/Comment.model.js");
const User = require("../models/User.model");

router.delete("/:userId", isAuthenticated, (req, res, next) => {
  User.findByIdAndDelete(req.params.userId)
    .then(() => {
      res.status(200).json({
        message: "Your profile is succesfully deleted. Sorry to see you go.",
      });
    })
    .catch((err) => {
      console.log("Don't delete what is not yours, very naughty!");
    });
});

module.exports = router;
