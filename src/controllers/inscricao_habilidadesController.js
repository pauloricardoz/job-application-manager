const inscricaoHabilidadesService = require('../services/inscricao_habilidadesService');

const ERROR_500 = 'Algo deu errado';

const getAll = async (_req, res, _next) => {
  try {
    const resultado = await inscricaoHabilidadesService.getAll();
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};


const create = async (req, res) => {
  const { idInscricao, idHabilidade } = req.body;
  try {
    const result = await inscricaoHabilidadesService
      .create({ idInscricao, idHabilidade }); 
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

const update = async (req, res) => {
  const { id: idInscricao } = req.params;
  const { idHabilidades } = req.body;
  try {
    const result = await inscricaoHabilidadesService
      .update({ idInscricao, idHabilidades }); 
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
    const result = await inscricaoHabilidadesService.exclude(id); 
    if (!result) return res.status(404).json({ message: 'Nenhuma linha afetada' });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = { getAll, create, update, exclude };
