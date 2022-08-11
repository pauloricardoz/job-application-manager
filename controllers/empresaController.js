const empresaService = require('../services/empresaService');

const getAll = async (req, res) => {
  const resultado = await empresaService.getAll();
  if (resultado === null) {
    return res.status(500).json({ message: 'Sorry' });
  }
  return res.status(200).json(resultado);
};

module.exports = { getAll };
