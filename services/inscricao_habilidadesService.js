const inscricaoHabilidadesModel = require('../models/inscricao_habilidadesModel');

const getAll = async () => inscricaoHabilidadesModel.getAll();

const getById = async (id) => inscricaoHabilidadesModel.getById(id);

const create = async ({ 
  idInscricao, idHabilidade,
}) => inscricaoHabilidadesModel.create({ idInscricao, idHabilidade });

const update = async ({ idInscricao, idHabilidades }) => {
  const inscricao = await inscricaoHabilidadesModel.getById(idInscricao);
  if (!inscricao) return null;

  await inscricaoHabilidadesModel.exclude(idInscricao);
  await Promise.all(idHabilidades.map(({ idHabilidade }) => inscricaoHabilidadesModel
    .create({ idInscricao, idHabilidade })));
  
  return { idInscricao, idHabilidades };
};

const exclude = async (id) => {
  const result = await inscricaoHabilidadesModel.exclude(id);
  if (result.affectedRows === 0) return null;
  return true;
};

module.exports = { getAll, getById, create, update, exclude };
