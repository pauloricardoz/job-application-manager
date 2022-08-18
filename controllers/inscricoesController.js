const inscricoesService = require('../services/inscricoesService');

const ERROR_500 = 'Algo deu errado';

const getAll = async (_req, res, _next) => {
  try {
    const resultado = await inscricoesService.getAll();
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await inscricoesService.getById(id); 
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const create = async (req, res) => {
  const { empresaId, dataInscricao, dataRetorno, status } = req.body;
  try {
    const result = await inscricoesService
      .create({ empresaId, dataInscricao, dataRetorno, status }); 
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { empresaId, dataInscricao, dataRetorno, status } = req.body;
  try {
    const result = await inscricoesService
      .update({ empresaId, dataInscricao, dataRetorno, status, id }); 
    if (!result) return res.status(400).json({ message: 'Operação não foi completada' });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const exclude = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await inscricoesService.exclude(id); 
    if (!result) return res.status(404).json({ message: 'Nenhuma linha afetada' });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = { getAll, getById, create, update, exclude };
