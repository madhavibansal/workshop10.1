const express = require("express");
const route = express.Router();
const {seller,topseller} = require("../module/index")



route.post("/seller",seller);

route.get("/topseller",topseller)

module.exports = route;