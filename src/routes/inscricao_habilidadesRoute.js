const express = require('express');

const inscricaoHabilidadesController = require('../controllers/inscricao_habilidadesController');
const valid = require('../middleware/inscricaoHabilidades');

const inscricaoHabilidadesRoute = express.Router();

inscricaoHabilidadesRoute.get('/', inscricaoHabilidadesController.getAll);
inscricaoHabilidadesRoute.post('/', valid.validationBody, inscricaoHabilidadesController.create);
inscricaoHabilidadesRoute.put('/:id', valid.validationBody, inscricaoHabilidadesController.update);
inscricaoHabilidadesRoute.delete('/:id', inscricaoHabilidadesController.exclude);

module.exports = inscricaoHabilidadesRoute;