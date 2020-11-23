
var express = require("express");
const recipeData = require("../recipeAPI.js")
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json(recipeData);
});

module.exports = router;