// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("../db");

// Allows to close the DB
const mongoose = require("mongoose");

const { Comment } = require("../models/Comment.model");
const { Landmark } = require("../models/Landmark.model");
const Province = require("../models/Province.model");
const { Route } = require("../models/Route.model");
const { User } = require("../models/User.model");

const seedDB = async () => {
  // Clear previous DB contents:
  //   console.log(Landmark);
  await Landmark.deleteMany({});
  await Route.deleteMany({});
  await Province.deleteMany({});
  await Comment.deleteMany({});

  const sevilleLandmarks = await Landmark.create([
    { name: "Catedral", position: { x: "0", y: "0" } },
    { name: "Torre del Oro", position: { x: "0", y: "0" } },
    { name: "Plaza de España", position: { x: "0", y: "0" } },
  ]);
  //   console.log(sevilleLandmarks);

  const almeriaLandmarks = await Landmark.create([
    { name: "Playa de los Genoveses", position: { x: "0", y: "0" } },
    { name: "Playa de los Muertos", position: { x: "0", y: "0" } },
  ]);
  //   console.log(almeriaLandmarks);

  const santanderLandmarks = await Landmark.create([
    { name: "Naranjo de Bulnes", position: { x: "0", y: "0" } },
    { name: "Covadonga Lakes", position: { x: "0", y: "0" } },
    { name: "Garganta del Cares", position: { x: "0", y: "0" } },
  ]);
  //   console.log(santanderLandmarks);

  const santanderRoutes = await Route.create([
    {
      name: "Ruta del Cares",
      nodes: [
        { x: "0", y: "0" },
        { x: "0", y: "0" },
        { x: "0", y: "0" },
      ],
    },
  ]);
  //   console.log(santanderRoutes);

  const provinces = [
    {
      name: "Sevilla",
      contents: { landmarks: sevilleLandmarks /*routes: sevilleRoutes*/ },
    },
    {
      name: "Almería",
      contents: { landmarks: almeriaLandmarks /*routes: almeriaRoutes*/ },
    },
    {
      name: "Santander",
      contents: { landmarks: santanderLandmarks, routes: santanderRoutes },
    },
  ];

  await Province.create(provinces);
};

seedDB().then(() => {
  console.log("Sedding succesful, closing DB connection");
  mongoose.connection.close();
});
