const empresaModel = require('../models/empresaModel');

const getAll = async () => {
  // if (Math.random() < 0.3) return null;
  return empresaModel.getAll();
};

module.exports = { getAll };
