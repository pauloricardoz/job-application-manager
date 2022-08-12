const habilidadesModel = require('../models/habilidadesModel');

const existsDataByName = (data, name) => data
  .find((e) => e.name.toLowerCase().includes(name.toLowerCase()));

const getAll = async () => habilidadesModel.getAll();

const getById = async (id) => habilidadesModel.getById(id);

const create = async ({ level, name }) => {
  const habilidades = await habilidadesModel.getAll();
  if (existsDataByName(habilidades, name)) return null;

  return habilidadesModel.create({ level, name });
};

const update = async ({ level, name, id }) => {
  const habilidade = await habilidadesModel.getById(id);
  if (!habilidade) return null;

  const result = await habilidadesModel.update({ level, name, id });
  
  if (!result.affectedRows) return null;
  return { name, id };
};

const exclude = async (id) => {
  const result = await habilidadesModel.exclude(id);
  if (result.affectedRows === 0) return null;
  return true;
};

module.exports = { getAll, getById, create, update, exclude };
