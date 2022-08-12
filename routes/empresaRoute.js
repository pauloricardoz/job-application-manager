const express = require('express');

const empresaController = require('../controllers/empresaController');

const empresaRoute = express.Router();

empresaRoute.get('/', empresaController.getAll);
empresaRoute.get('/:id', empresaController.getById);
empresaRoute.post('/', empresaController.create);
empresaRoute.put('/:id', empresaController.update);
empresaRoute.delete('/:id', empresaController.exclude);

module.exports = empresaRoute;