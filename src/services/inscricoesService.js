const inscricoesModel = require('../models/inscricoesModel');

const getAll = async () => inscricoesModel.getAll();

const getById = async (id) => inscricoesModel.getById(id);

const create = async ({ 
  empresaId, dataInscricao, dataRetorno, status,
}) => inscricoesModel.create({ empresaId, dataInscricao, dataRetorno, status });

const update = async ({ empresaId, dataInscricao, dataRetorno, status, id }) => {
  const inscricao = await inscricoesModel.getById(id);
  if (!inscricao) return null;

  const result = await inscricoesModel
    .update({ empresaId, dataInscricao, dataRetorno, status, id });
  
  if (!result.affectedRows) return null;
  return { empresaId, dataInscricao, dataRetorno, status, id };
};

const exclude = async (id) => {
  const result = await inscricoesModel.exclude(id);
  if (result.affectedRows === 0) return null;
  return true;
};

module.exports = { getAll, getById, create, update, exclude };
