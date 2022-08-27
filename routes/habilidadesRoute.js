const express = require('express');

const habilidadesController = require('../controllers/habilidadesController');
const valid = require('../middleware/habilidades');

const habilidadesRoute = express.Router();

habilidadesRoute.get('/', habilidadesController.getAll);
habilidadesRoute.post('/', valid.validationBody, habilidadesController.create);
habilidadesRoute.get('/:id', habilidadesController.getById);
habilidadesRoute.put('/:id', habilidadesController.update);
habilidadesRoute.delete('/:id', habilidadesController.exclude);

module.exports = habilidadesRoute;