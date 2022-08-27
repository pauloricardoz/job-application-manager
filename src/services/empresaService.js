const empresaModel = require('../models/empresaModel');

const existsDataByName = (data, name) => data
  .find((e) => e.name.toLowerCase().includes(name.toLowerCase()));

const getAll = async () => empresaModel.getAll();

const getById = async (id) => empresaModel.getById(id);

const create = async ({ name }) => {
  const empresas = await empresaModel.getAll();
  if (existsDataByName(empresas, name)) return null;

  return empresaModel.create({ name });
};

const update = async ({ name, id }) => {
  const empresa = await empresaModel.getById(id);
  if (!empresa) return null;

  const result = await empresaModel.update({ name, id });
  
  if (!result.affectedRows) return null;
  return { name, id };
};

const exclude = async (id) => {
  const result = await empresaModel.exclude(id);
  if (result.affectedRows === 0) return null;
  return true;
};

module.exports = { getAll, getById, create, update, exclude };
