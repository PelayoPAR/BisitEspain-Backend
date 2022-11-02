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
// const rutaDelCaresCoords = require("./coordinates/rutaDelCarescoords");

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
      type: "Feature",
      properties: { name: "Seville Test Route", category: "Urban" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-5.9939, 37.38539],
          [-5.99363, 37.38483],
          [-5.99358, 37.38446],
          [-5.99356, 37.38431],
          [-5.99356, 37.3841],
          [-5.99377, 37.384],
          [-5.99385, 37.38394],
          [-5.99403, 37.38372],
          [-5.9943, 37.38364],
          [-5.99549, 37.3833],
          [-5.99641, 37.38299],
          [-5.99656, 37.38312],
          [-5.99674, 37.38301],
          [-5.9962, 37.38244],
          [-5.99593, 37.38209],
          [-5.99567, 37.3822],
          [-5.99568, 37.38222],
          [-5.99556, 37.38228],
          [-5.99461, 37.38217],
          [-5.99453, 37.38217],
          [-5.99446, 37.38219],
          [-5.99437, 37.38216],
          [-5.99433, 37.38213],
          [-5.99401, 37.38212],
          [-5.99397, 37.38215],
          [-5.99393, 37.3822],
          [-5.99365, 37.38217],
          [-5.99354, 37.38212],
          [-5.99339, 37.38192],
          [-5.99339, 37.38184],
          [-5.9937, 37.38104],
          [-5.99282, 37.38082],
          [-5.99271, 37.38075],
          [-5.99267, 37.38064],
          [-5.99263, 37.38028],
          [-5.99255, 37.38015],
          [-5.99241, 37.38005],
          [-5.9919, 37.37992],
          [-5.99009, 37.37945],
          [-5.98959, 37.3793],
          [-5.98959, 37.37919],
          [-5.98954, 37.37913],
          [-5.98943, 37.37906],
          [-5.98933, 37.37904],
          [-5.98924, 37.37904],
          [-5.98911, 37.37884],
          [-5.98907, 37.37875],
          [-5.98897, 37.3788],
          [-5.98886, 37.37872],
          [-5.98857, 37.37824],
          [-5.98785, 37.37706],
        ],
      },
    },
  ]);

  //   console.log(sevilleLandmarks);

  const almeriaLandmarks = await Landmark.create([
    {
      name: "Playa de los Genoveses",
      category: "Coastal",
      position: { latitude: 36.74477240126721, longitude: -2.1221465827692327 },
    },
    {
      name: "Playazo de Rodalquilar",
      category: "Coastal",
      position: { latitude: 36.86076969276527, longitude: -2.0064208333557585 },
    },
    {
      name: "Playa de los Muertos",
      category: "Coastal",
      position: { latitude: 36.95279270224342, longitude: -1.898618720458036 },
    },
  ]);

  const almeriaRoutes = await Route.create([
    {
      type: "Feature",
      properties: { name: "Almeria Test Route", category: "Coastal" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-1.898618720458036, 36.95279270224342],
          [-2.0064208333557585, 36.86076969276527],
          [-2.1221465827692327, 36.74477240126721],
        ],
      },
    },
  ]);
  // const almeriaRoutes = await Route.create([
  //   {
  //     name: "Almeria Test Route",
  //     category: "Coastal",
  //     nodes: [
  //       { latitude: 36.95279270224342, longitude: -1.898618720458036 },
  //       { latitude: 36.86076969276527, longitude: -2.0064208333557585 },
  //       { latitude: 36.74477240126721, longitude: -2.1221465827692327 },
  //     ],
  //   },
  // ]);

  //   console.log(almeriaLandmarks);

  const asturiasLandmarks = await Landmark.create([
    {
      name: "Naranjo de Bulnes",
      category: "Rural",
      position: { latitude: 43.200174089814716, longitude: -4.816617811888131 },
      URL: "https://en.wikipedia.org/wiki/Naranjo_de_Bulnes",
    },
    {
      name: "Covadonga Lakes",
      category: "Rural",
      position: { latitude: 43.2699869834812, longitude: -4.985626699762119 },
      URL: "https://en.wikipedia.org/wiki/Lakes_of_Covadonga",
    },
    {
      name: "Garganta del Cares",
      category: "Rural",
      position: { latitude: 43.255247319773346, longitude: -4.836736939292379 },
      URL: "https://en.wikipedia.org/wiki/Cares_Trail",
    },
  ]);
  //   console.log(asturiasLandmarks);

  const asturiasRoutes = await Route.create([
    {
      type: "Feature",
      properties: { name: "Ruta del Cares", category: "Rural" },
      geometry: {
        type: "LineString",
        coordinates: [
          [-4.905537303433168, 43.213300401765764],
          [-4.88370792600688, 43.24853601425979],
          [-4.830832011063734, 43.258285717408214],
        ],
      },
    },
  ]);
  // const asturiasRoutes = await Route.create([
  //   {
  //     name: "Ruta del Cares",
  //     category: "Rural",
  //     nodes: [
  //       { latitude: 43.213300401765764, longitude: -4.905537303433168 },
  //       { latitude: 43.24853601425979, longitude: -4.88370792600688 },
  //       { latitude: 43.258285717408214, longitude: -4.830832011063734 },
  //     ],
  //   },
  // ]);
  //   console.log(asturiasRoutes);

  const provinces = [
    {
      name: "Sevilla",
      contents: {
        landmarks: sevilleLandmarks,
        routes: sevilleRoutes,
      },
      URL: "https://en.wikipedia.org/wiki/Province_of_Seville",
      center: {
        latitude: 37.385699756490595,
        longitude: -5.986115665723369,
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
      name: "Asturias",
      contents: {
        landmarks: asturiasLandmarks,
        routes: asturiasRoutes,
      },
      URL: "https://en.wikipedia.org/wiki/Cantabria",
      center: {
        latitude: 43.321916160020756,
        longitude: -5.489437103582958,
      },
    },
  ];

  await Province.create(provinces);
};

seedDB().then(() => {
  console.log("Sedding succesful, closing DB connection");
  mongoose.connection.close();
});
