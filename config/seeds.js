// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("../db");

// Allows to close the DB
const mongoose = require("mongoose");

const { Comment } = require("../models/Comment.model");
const { Landmark } = require("../models/Landmark.model");
const { Province } = require("../models/Province.model");
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
    {
      name: "Catedral",
      category: "Urban",
      position: { latitude: 37.386016, longitude: -5.993348 },
      URL: "https://en.wikipedia.org/wiki/Seville_Cathedral",
    },
    {
      name: "Torre del Oro",
      category: "Urban",
      position: { latitude: 37.382447, longitude: -5.996554 },
      URL: "https://en.wikipedia.org/wiki/Torre_del_Oro",
    },
    {
      name: "Plaza de España",
      category: "Urban",
      position: { latitude: 37.37729, longitude: -5.986878 },
      URL: "https://en.wikipedia.org/wiki/Plaza_de_Espa%C3%B1a,_Seville",
    },
  ]);

  const sevilleRoutes = await Route.create([
    {
      name: "Seville Test Route",
      category: "Urban",
      nodes: [
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
      ],
    },
  ]);

  //   console.log(sevilleLandmarks);

  const almeriaLandmarks = await Landmark.create([
    {
      name: "Playa de los Genoveses",
      category: "Coastal",
      position: { latitude: 0, longitude: 0 },
    },
    {
      name: "Playa de los Muertos",
      category: "Coastal",
      position: { latitude: 0, longitude: 0 },
    },
  ]);

  const almeriaRoutes = await Route.create([
    {
      name: "Almeria Test Route",
      category: "Coastal",
      nodes: [
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
      ],
    },
  ]);

  //   console.log(almeriaLandmarks);

  const santanderLandmarks = await Landmark.create([
    {
      name: "Naranjo de Bulnes",
      category: "Rural",
      position: { latitude: 0, longitude: 0 },
      URL: "https://en.wikipedia.org/wiki/Naranjo_de_Bulnes",
    },
    {
      name: "Covadonga Lakes",
      category: "Rural",
      position: { latitude: 0, longitude: 0 },
      URL: "https://en.wikipedia.org/wiki/Lakes_of_Covadonga",
    },
    {
      name: "Garganta del Cares",
      category: "Rural",
      position: { latitude: 0, longitude: 0 },
      URL: "https://en.wikipedia.org/wiki/Cares_Trail",
    },
  ]);
  //   console.log(santanderLandmarks);

  const santanderRoutes = await Route.create([
    {
      name: "Ruta del Cares",
      category: "Rural",
      nodes: [
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
        { latitude: 0, longitude: 0 },
      ],
    },
  ]);
  //   console.log(santanderRoutes);

  const provinces = [
    {
      name: "Sevilla",
      contents: {
        landmarks: sevilleLandmarks,
        routes: sevilleRoutes,
      },
      URL: "https://en.wikipedia.org/wiki/Province_of_Seville",
      center: {
        latitude: 37.3901,
        longitude: -5.9947,
      },
    },
    {
      name: "Almería",
      contents: {
        landmarks: almeriaLandmarks,
        routes: almeriaRoutes,
      },
      URL: "https://en.wikipedia.org/wiki/Province_of_Almer%C3%ADa",
      center: {
        latitude: 36.977570384217664,
        longitude: -2.1921190582752517,
      },
    },
    {
      name: "Santander",
      contents: {
        landmarks: santanderLandmarks,
        routes: santanderRoutes,
      },
      URL: "https://en.wikipedia.org/wiki/Cantabria",
      center: {
        latitude: 43.21554091477326,
        longitude: -4.10098748693401,
      },
    },
  ];

  await Province.create(provinces);
};

seedDB().then(() => {
  console.log("Sedding succesful, closing DB connection");
  mongoose.connection.close();
});
