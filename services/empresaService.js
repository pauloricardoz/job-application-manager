const empresaModel = require('../models/empresaModel');

const getAll = async () => empresaModel.getAll();

module.exports = { getAll };
