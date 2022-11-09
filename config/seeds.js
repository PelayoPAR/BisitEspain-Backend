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
      images: ["img/catedral1.jpg"],
      description:
        "One of the largest christian temples in the world, also said to be the largest Gothic cathedral. Its construction was carried out in several phases over more than 500 years, resulting in a mixture of several architectural styles that provide its special beauty. It houses the remains of Christopher Columbus. Its iconic Giralda belltower is based on the Seville's former Almohad mosque minaret and is a perfect example of the crucible of cultures existing in the city.",
    },
    {
      name: "Torre del Oro",
      category: "Urban",
      position: { latitude: 37.382447, longitude: -5.996554 },
      URL: "https://en.wikipedia.org/wiki/Torre_del_Oro",
      images: ["img/torreDelOro1.jpg"],
      description:
        "The Torre del Oro is the `Tower of Gold` in Seville. The 36-meter-high tower was built by the Almohads in the 12th century and was part of the Moorish city wall, which ran between the Alcazar Palace and the rest of Seville. The purpose of the tower was to control shipping on the Guadalquivir. A heavy chain ran under water from the massive tower to the other side to prevent enemy ships from sailing on the river. A maritime museum is located on the top floor.",
    },
    {
      name: "Plaza de España",
      category: "Urban",
      position: { latitude: 37.37729, longitude: -5.986878 },
      URL: "https://en.wikipedia.org/wiki/Plaza_de_Espa%C3%B1a,_Seville",
      images: ["img/plazaEspana1.jpg"],
      description:
        "The Plaza de España is a spectacle of light and majesty. was designed by the great Seville architect Aníbal González as an emblematic space for the 1929 Ibero-American Expo. The result was a plaza-palace unique in the world. Its proportions are lavish. Along the entire perimeter of the plaza, there is a canal of 515 metres in length, which you can travel by boat, a truly romantic experience.",
    },
  ])

  const sevilleRoutes = await Route.create([
    {
      type: "Feature",
      properties: {
        name: "Seville Walking Tour",
        category: "Urban",
        description:
          "This beautiful tour leads through Moorish palaces, picturesque streets, the Seville Cathedral, the Alcázar, Torre del Oro, Plaza de España and other must-see places.",
        images: ["img/sevilleRoute1.jpg"],
      },
      geometry: {
        type: "LineString",
        coordinates: rutaSevillaUno,
      },
    },
  ])

  const almeriaLandmarks = await Landmark.create([
    {
      name: "Playa de los Genoveses",
      category: "Coastal",
      position: { latitude: 36.74477240126721, longitude: -2.1221465827692327 },
      URL: "",
      images: ["img/genoveses1.jpg"],
      description:
        "Without doubt the most beautiful bay of the Nature Reserve this beach consists of dunes, virgin fine golden sand, otherworldly surroundings and the warm Mediterranean Sea, it doesn't get much better.. Located on a valley without paved roads and very few buildings that preserves the beauty in its purest form. It's clear turquoise waters are soul nourishing.",
    },
    {
      name: "Playazo de Rodalquilar",
      category: "Coastal",
      position: { latitude: 36.86076969276527, longitude: -2.0064208333557585 },
      URL: "",
      images: ["img/rodalquilar1.jpg"],
      description:
        "Impressive and extensive virgin beach with exceptional environmental conditions. A place to get lost and feel the wild nature of these coasts. Its seabed is equally beautiful, being a place frequented by divers. Next to it, the castle of San Ramón rises, a defensive bastion of the 18th century. At its feet there is a rocky area from which you can admire the plastic and chromatic beauty of the volcanic cliffs.",
    },
    {
      name: "Playa de los Muertos",
      category: "Coastal",
      position: { latitude: 36.95279270224342, longitude: -1.898618720458036 },
      URL: "",
      images: ["img/playaMuertos1.jpg"],
      description:
        "Though ominously named, 'The Beach of the Dead', situated in Cabo de Gata, is easily one of the most delightful natural paradoxes in Europe. Playa de los Muertos enchants visitors with its Edenic scenery of comfy round pebbles and turquoise waters. It's ominous name comes from the beach being located at a point where natural sea currents converge, causing bodies of shipwrecked mariners to wash ashore. Fortunately, this is a thing of the past.",
    },
  ])

  const almeriaRoutes = await Route.create([
    {
      type: "Feature",
      properties: {
        name: "Almeria Test Route",
        category: "Coastal",
        description:
          "This road tour will take you through otherworldly landscape to some of the most beautiful and heart nurturing beaches in Spain. The total length is 50 Km and should take just a little over an hour drive. You won't be the same person after visiting these iconic beaches which will take both your stress and breath away. Absolutely worth it",
        images: ["img/almeriaRoute1.jpg"],
      },
      geometry: {
        type: "LineString",
        coordinates: rutaPlayasCaboGata,
      },
    },
  ])

  const asturiasLandmarks = await Landmark.create([
    {
      name: "Naranjo de Bulnes",
      category: "Rural",
      position: { latitude: 43.200174089814716, longitude: -4.816617811888131 },
      URL: "https://en.wikipedia.org/wiki/Naranjo_de_Bulnes",
      images: ["img/bulnes1.jpg"],
      description:
        "This 2500+ meters peak was born from a glaciation. One of the most precious jewels and wanted summits for Spanish mountaineers. The beauty of this mountain is not only in what you look at, is has to do more with its magic. When you feel it you will understand. Some things can not be expressed with words. In no way an easy climb. Rock climbing technics and gear are necesary. Nevertheless climbing 'Naranjo de Bulnes' would be worthwhile and an incredibly grateful experience.",
    },
    {
      name: "Covadonga Lakes",
      category: "Rural",
      position: { latitude: 43.2699869834812, longitude: -4.985626699762119 },
      URL: "https://en.wikipedia.org/wiki/Lakes_of_Covadonga",
      images: ["img/lagosCovadonga1.jpg"],
      description:
        "The Lagos de Covadonga are 2 mountain lakes in the Picos de Europa National Park: Lago Enol and Lago de la Ercina. If you're a fan of the outdoors, then the lakes of Covadonga are the perfect destination for you: glacial lakes, stunning mountains, hiking trails, epic viewpoints, and wild animals. And best of all? Even in the summer you'll easily get the place to yourself!",
    },
    {
      name: "Garganta del Cares",
      category: "Rural",
      position: { latitude: 43.255247319773346, longitude: -4.836736939292379 },
      URL: "https://en.wikipedia.org/wiki/Cares_Trail",
      images: ["img/cares1.jpg"],
      description:
        "Also known as the 'Divine Gorge', The Cares gorge was created by the river Cares and splits the western and central massifs of the Picos de Europa range.",
    },
  ])

  const asturiasRoutes = await Route.create([
    {
      type: "Feature",
      properties: {
        name: "Ruta del Cares",
        category: "Rural",
        description:
          "This hiking trail lets you walk among mountains over 2,000 metres tall, along the imposing ravine carved out by the river Cares. You'll see peaks rich in legend, cross bridges from one side of the gorge to the other, pass through around 70 tunnels carved into the rock, and see some spectacular natural settings.Few things more Spanish than packing a huge baguette (bocadillo) of some delicious meat wrapped up in tin foil when walking in Spain.",
        images: ["img/asturiasRoute1.jpg"],
      },
      geometry: {
        type: "LineString",
        coordinates: rutaDelCaresCoords,
      },
    },
  ])

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
