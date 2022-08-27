const empresaService = require('../services/empresaService');

const ERROR_500 = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const resultado = await empresaService.getAll();
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await empresaService.getById(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await empresaService.create({ name });
    if (!result) return res.status(400).json({ message: 'Empresa já existe' });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await empresaService.update({ name, id });
    if (!result) {
      return res.status(400).json({ message: 'Operação não foi completada' });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const exclude = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await empresaService.exclude(id);
    if (!result) {
      return res.status(404).json({ message: 'Nenhuma linha afetada' });
    }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = { getAll, getById, create, update, exclude };
