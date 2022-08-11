const express = require('express');

const habilidadesController = require('../controllers/habilidadesController');
const valid = require('../middleware/habildiades');

const empresaRoute = express.Router();

empresaRoute.get('/', habilidadesController.getAll);
empresaRoute.post('/', valid.validacao, habilidadesController.create);

module.exports = empresaRoute;
