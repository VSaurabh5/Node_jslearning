// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
const homecontroller=require("../controllers/homes");
hostRouter.get("/add-home",homecontroller.getAddHome); 

const registeredHomes = [];

hostRouter.post("/add-home",homecontroller.postAddHome);

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
