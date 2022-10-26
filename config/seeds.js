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

  // const sevilleRoutes = await Route.create([
  //   {
  //     type: "Feature",
  //     properties: { name: "Seville Test Route", category: "Urban" },
  //     geometry: {
  //       type: "LineString",
  //       coordinates: [
  //         [-5.9939, 37.38539],
  //         [-5.99363, 37.38483],
  //         [-5.99358, 37.38446],
  //         [-5.99356, 37.38431],
  //         [-5.99356, 37.3841],
  //         [-5.99377, 37.384],
  //         [-5.99385, 37.38394],
  //         [-5.99403, 37.38372],
  //         [-5.9943, 37.38364],
  //         [-5.99549, 37.3833],
  //         [-5.99641, 37.38299],
  //         [-5.99656, 37.38312],
  //         [-5.99674, 37.38301],
  //         [-5.9962, 37.38244],
  //         [-5.99593, 37.38209],
  //         [-5.99567, 37.3822],
  //         [-5.99568, 37.38222],
  //         [-5.99556, 37.38228],
  //         [-5.99461, 37.38217],
  //         [-5.99453, 37.38217],
  //         [-5.99446, 37.38219],
  //         [-5.99437, 37.38216],
  //         [-5.99433, 37.38213],
  //         [-5.99401, 37.38212],
  //         [-5.99397, 37.38215],
  //         [-5.99393, 37.3822],
  //         [-5.99365, 37.38217],
  //         [-5.99354, 37.38212],
  //         [-5.99339, 37.38192],
  //         [-5.99339, 37.38184],
  //         [-5.9937, 37.38104],
  //         [-5.99282, 37.38082],
  //         [-5.99271, 37.38075],
  //         [-5.99267, 37.38064],
  //         [-5.99263, 37.38028],
  //         [-5.99255, 37.38015],
  //         [-5.99241, 37.38005],
  //         [-5.9919, 37.37992],
  //         [-5.99009, 37.37945],
  //         [-5.98959, 37.3793],
  //         [-5.98959, 37.37919],
  //         [-5.98954, 37.37913],
  //         [-5.98943, 37.37906],
  //         [-5.98933, 37.37904],
  //         [-5.98924, 37.37904],
  //         [-5.98911, 37.37884],
  //         [-5.98907, 37.37875],
  //         [-5.98897, 37.3788],
  //         [-5.98886, 37.37872],
  //         [-5.98857, 37.37824],
  //         [-5.98785, 37.37706],
  //       ],
  //     },
  //   },
  // ]);

  const sevilleRoutes = await Route.create([
    {
      name: "Seville Test Route",
      category: "Urban",
      nodes: [
        { latitude: 37.386016, longitude: -5.993348 },
        { latitude: 37.382447, longitude: -5.996554 },
        { latitude: 37.37729, longitude: -5.986878 },

        // { latitude: 37.38539, longitude: -5.9939 },
        // { latitude: 37.38483, longitude: -5.99363 },
        // { latitude: 37.38446, longitude: -5.99358 },
        // { latitude: 37.38431, longitude: -5.99356 },
        // { latitude: 37.3841, longitude: -5.99356 },
        // { latitude: 37.384, longitude: -5.99377 },
        // { latitude: 37.38394, longitude: -5.99385 },
        // { latitude: 37.38372, longitude: -5.99403 },
        // { latitude: 37.38364, longitude: -5.9943 },
        // { latitude: 37.3833, longitude: -5.99549 },
        // { latitude: 37.38299, longitude: -5.99641 },
        // { latitude: 37.38312, longitude: -5.99656 },
        // { latitude: 37.38301, longitude: -5.99674 },
        // { latitude: 37.38244, longitude: -5.9962 },
        // { latitude: 37.38209, longitude: -5.99593 },
        // { latitude: 37.3822, longitude: -5.99567 },
        // { latitude: 37.38222, longitude: -5.99568 },
        // { latitude: 37.38228, longitude: -5.99556 },
        // { latitude: 37.38217, longitude: -5.99461 },
        // { latitude: 37.38217, longitude: -5.99453 },
        // { latitude: 37.38219, longitude: -5.99446 },
        // { latitude: 37.38216, longitude: -5.99437 },
        // { latitude: 37.38213, longitude: -5.99433 },
        // { latitude: 37.38212, longitude: -5.99401 },
        // { latitude: 37.38215, longitude: -5.99397 },
        // { latitude: 37.3822, longitude: -5.99393 },
        // { latitude: 37.38217, longitude: -5.99365 },
        // { latitude: 37.38212, longitude: -5.99354 },
        // { latitude: 37.38192, longitude: -5.99339 },
        // { latitude: 37.38184, longitude: -5.99339 },
        // { latitude: 37.38104, longitude: -5.9937 },
        // { latitude: 37.38082, longitude: -5.99282 },
        // { latitude: 37.38075, longitude: -5.99271 },
        // { latitude: 37.38064, longitude: -5.99267 },
        // { latitude: 37.38028, longitude: -5.99263 },
        // { latitude: 37.38015, longitude: -5.99255 },
        // { latitude: 37.38005, longitude: -5.99241 },
        // { latitude: 37.37992, longitude: -5.9919 },
        // { latitude: 37.37945, longitude: -5.99009 },
        // { latitude: 37.3793, longitude: -5.98959 },
        // { latitude: 37.37919, longitude: -5.98959 },
        // { latitude: 37.37913, longitude: -5.98954 },
        // { latitude: 37.37906, longitude: -5.98943 },
        // { latitude: 37.37904, longitude: -5.98933 },
        // { latitude: 37.37904, longitude: -5.98924 },
        // { latitude: 37.37884, longitude: -5.98911 },
        // { latitude: 37.37875, longitude: -5.98907 },
        // { latitude: 37.3788, longitude: -5.98897 },
        // { latitude: 37.37872, longitude: -5.98886 },
        // { latitude: 37.37824, longitude: -5.98857 },
        // { latitude: 37.37706, longitude: -5.98785 },
      ],
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
      name: "Almeria Test Route",
      category: "Coastal",
      nodes: [
        { latitude: 36.95279270224342, longitude: -1.898618720458036 },
        { latitude: 36.86076969276527, longitude: -2.0064208333557585 },
        { latitude: 36.74477240126721, longitude: -2.1221465827692327 },
      ],
    },
  ]);

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
      name: "Ruta del Cares",
      category: "Rural",
      nodes: [
        { latitude: 43.213300401765764, longitude: -4.905537303433168 },
        { latitude: 43.24853601425979, longitude: -4.88370792600688 },
        { latitude: 43.258285717408214, longitude: -4.830832011063734 },
      ],
    },
  ]);
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
        latitude: 43.35857686653735,
        longitude: -5.8128542691204625,
      },
    },
  ];

  await Province.create(provinces);
};

seedDB().then(() => {
  console.log("Sedding succesful, closing DB connection");
  mongoose.connection.close();
});
