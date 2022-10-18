const { Schema, model } = require("mongoose");
// const { userSchema, User } = require("./User.model");

const commentSchema = new Schema(
  {
    userEmail: {
      type: String,
      default: "mail@default.com",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

module.exports = { Comment, commentSchema };
