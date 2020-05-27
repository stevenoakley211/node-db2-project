const express = require("express");


const carsRouter = require('./routes/carsRouter')
const server = express();


server.use(express.json());
server.use('/cars',carsRouter)

module.exports = server;