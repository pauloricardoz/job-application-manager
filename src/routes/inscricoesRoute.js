const express = require('express');

const inscricoesController = require('../controllers/inscricoesController');
const valid = require('../middleware/inscricoes');

const inscricoesRoute = express.Router();

inscricoesRoute.get('/', inscricoesController.getAll);
inscricoesRoute.post('/', valid.validationBody, inscricoesController.create);
inscricoesRoute.get('/:id', inscricoesController.getById);
inscricoesRoute.put('/:id', inscricoesController.update);
inscricoesRoute.delete('/:id', inscricoesController.exclude);

module.exports = inscricoesRoute;