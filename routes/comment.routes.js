const express = require("express")
const commentRouter = express.Router()
const { isAuthenticated } = require("../middleware/jwt.middleware.js")
const { Comment } = require("../models/Comment.model")
const { Landmark } = require("../models/Landmark.model")
const { Route } = require("../models/Route.model")

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
        },
        { new: true }
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

commentRouter.get("/:touristicItemType/getComments", (req, res) => {
  const { touristicItemType } = req.params
  const { touristicItemId } = req.query

  console.log({ touristicItemId, touristicItemType })

  if (touristicItemType === "landmark") {
    Landmark.findById(touristicItemId)
      .populate({
        path: "comments",
        model: "Comment",
        populate: {
          path: "owner",
          model: "User",
          select: "-password",
        },
      })
      .then(({ comments }) => {
        res.json({ comments })
      })
  } else if (touristicItemType === "route") {
    Route.findById(touristicItemId)
      .populate({
        path: "properties.comments",
        model: "Comment",
        populate: {
          path: "owner",
          model: "User",
          select: "-password",
        },
      })
      .then(({ properties: { comments } }) => {
        res.json({ comments })
      })
  } else {
    res.status(400).json({ err: "Touristic Item Type not supported" })
  }
})

commentRouter.put("/:commentId", isAuthenticated, async (req, res) => {
  const { commentId } = req.params
  const { message, rating } = req.body
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      {
        message: message,
        rating: rating,
      },
      { new: true }
    )
    res.json(updatedComment)
  } catch (err) {
    console.error("Comment edit failed", err)
    res.status(400).json({ err: "Comment edit failed" })
  }
})

module.exports = commentRouter
