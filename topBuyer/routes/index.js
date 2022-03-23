const express = require("express");
const route = express.Router();
const {buyer,topbuyer} = require("../module/index")



route.post("/buyer",buyer);

route.get("/topbuyer",topbuyer)

module.exports = route;