const express = require("express");
const routes  = express.Router();

const {adddata,getdata} = require("../Controller/contro");
routes.post("/useranswer", adddata);
routes.get("/useranswer", getdata)



module.exports = routes;