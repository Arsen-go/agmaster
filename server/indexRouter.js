const express = require("express");
const { homePage } = require("./indexController");

const router = express.Router();
router.get("/", homePage);

module.exports = router;