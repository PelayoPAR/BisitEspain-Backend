const express = require("express")
const commentRouter = express.Router()
const { isAuthenticated } = require("../middleware/jwt.middleware.js")
const { Comment } = require("../models/Comment.model")
const { Landmark } = require("../models/Landmark.model")
const { Route } = require("../models/Route.model")

commentRouter.get("/:touristicItemType/getComments", (req, res) => {
  const { touristicItemType } = req.params
  const { touristicItemId } = req.query

  console.log({ touristicItemId, touristicItemType })

  if (touristicItemType === "landmark") {
    return Landmark.findById(touristicItemId)
      .populate("comments")
      .then(({ comments }) => {
        res.json({ comments })
      })
  } else if (touristicItemType === "route") {
    return Route.findById(touristicItemId)
      .populate("properties.comments")
      .then(({ comments }) => {
        res.json({ comments })
      })
  } else {
    res.status(400).json({ err: "Touristic Item Type not supported" })
  }
})

commentRouter.post("/create", isAuthenticated, async (req, res) => {
  const { message, rating, isLandmark, _id: touristicItemId } = req.body

  try {
    const createdComment = await Comment.create({
      message,
      rating,
      owner: req.payload._id,
    })
    if (isLandmark) {
      const updatedLandmark = await Landmark.findByIdAndUpdate(
        touristicItemId,
        {
          $push: { comments: createdComment._id },
        }
      )
      res.json({ updatedLandmark, createdComment }) // To update the comment list in UI
    } else {
      const updatedRoute = await Route.findByIdAndUpdate(
        touristicItemId,
        {
          $push: { "properties.comments": createdComment._id },
        },
        { new: true }
      )
      res.json({ updatedRoute, createdComment })
    }
  } catch (err) {
    console.log("Could not create Comment. Error: ", err)
  }

  // Comment.create({ message, rating, owner: req.payload._id })
  //   .then((createdComment) => res.json(createdComment))
  //   .catch((err) => {
  //     console.log("Could not create Comment");
  //   });
})

module.exports = commentRouter
