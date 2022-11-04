// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config()

// ℹ️ Connects to the database
require("../db")

// Allows to close the DB
const mongoose = require("mongoose")

const { Comment } = require("../models/Comment.model")
const { Landmark } = require("../models/Landmark.model")
const { Province } = require("../models/Province.model")
const { Route } = require("../models/Route.model")
const { User } = require("../models/User.model")
const { rutaDelCaresCoords } = require("./coordinates/rutaDelCaresCoords.jsx")
const { rutaPlayasCaboGata } = require("./coordinates/rutaPlayasCaboGata.jsx")
const { rutaSevillaUno } = require("./coordinates/rutaSevillaUno.jsx")

const seedDB = async () => {
  // Clear previous DB contents:
  //   console.log(Landmark);
  await Landmark.deleteMany({})
  await Route.deleteMany({})
  await Province.deleteMany({})
  await Comment.deleteMany({})

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
  ])

  const sevilleRoutes = await Route.create([
    {
      type: "Feature",
      properties: { name: "Seville Test Route", category: "Urban" },
      geometry: {
        type: "LineString",
        coordinates: rutaSevillaUno,
      },
    },
  ])

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
  ])

  const almeriaRoutes = await Route.create([
    {
      type: "Feature",
      properties: { name: "Almeria Test Route", category: "Coastal" },
      geometry: {
        type: "LineString",
        coordinates: rutaPlayasCaboGata,
      },
    },
  ])
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
  ])
  //   console.log(asturiasLandmarks);

  const asturiasRoutes = await Route.create([
    {
      type: "Feature",
      properties: { name: "Ruta del Cares", category: "Rural" },
      geometry: {
        type: "LineString",
        coordinates: rutaDelCaresCoords,
      },
    },
  ])
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
  ]

  await Province.create(provinces)
}

seedDB().then(() => {
  console.log("Sedding succesful, closing DB connection")
  mongoose.connection.close()
})
