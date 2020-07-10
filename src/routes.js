const express = require('express')
const routes = express.Router()

const PlaceController = require('./controllers/PlaceController')

routes.get('/places', PlaceController.index)

module.exports = routes