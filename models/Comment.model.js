const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    message: {
      type: String,
      trim: true,
      required: true,
    },
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = { Comment, commentSchema };
