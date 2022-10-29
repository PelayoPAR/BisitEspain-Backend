const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const profileRoutes = require("./profile.routes.js");
const commentRoutes = require("./comment.routes");
const { Province } = require("../models/Province.model");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Province.find({}).then((allProvinces) => {
    // console.log(allProvinces);
    res.json(allProvinces);
  });
});

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
