const express = require("express");
const router = express.Router();

const homeController = require("../controllers/homePage");

router.get("/", homeController);

module.exports = router;