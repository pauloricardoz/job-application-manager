const express = require('express');

const empresaController = require('../controllers/empresaController');

const empresaRoute = express.Router();

empresaRoute.get('/', empresaController.getAll);

module.exports = empresaRoute;