const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const { Province } = require("../models/Province.model");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Province.find({}).then((allProvinces) => {
    // console.log(allProvinces);
    res.json(allProvinces);
  });
});

router.use("/auth", authRoutes);

module.exports = router;
