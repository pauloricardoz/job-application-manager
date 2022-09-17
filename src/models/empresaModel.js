const Empresa = require('../database/sequelize/models/empresa');

const values = (data) => data;

const getAll = async () => {
  const result = await Empresa.findAll();
  return result.map(values);
};

const getById = async (id) => {
  const result = await Empresa.findByPk(id);
  return values(result);
};

const create = async ({ name }) => {
  const result = await Empresa.create({ name });
  return values(result);
};

const update = async ({ name, id }) => {
  const result = await Empresa.update({ name }, { where: { id } });
  return values(result);
};

const exclude = async (id) => {
  const result = await Empresa.destroy({ where: { id } });
  return values(result);
};

module.exports = { getAll, getById, create, update, exclude };
