const empresaService = require('../services/empresaService');

const getAll = async (req, res) => {
  const resultado = await empresaService.getAll();
  return res.status(200).json(resultado);
};

module.exports = { getAll };
