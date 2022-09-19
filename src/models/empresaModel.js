const Empresa = require('../database/sequelize/models/empresa');
const { extractValues } = require('../helper/sequelizeFunctions');

const getAll = async () => {
  const result = await Empresa.findAll();
  return result.map(extractValues);
};

const getById = async (id) => {
  const result = await Empresa.findByPk(id);
  return extractValues(result);
};

const create = async ({ name }) => {
  const result = await Empresa.create({ name });
  return extractValues(result);
};

const update = async ({ name, id }) => {
  const result = await Empresa.update({ name }, { where: { id } });
  return extractValues(result);
};

const exclude = async (id) => {
  const result = await Empresa.destroy({ where: { id } });
  return extractValues(result);
};

module.exports = { getAll, getById, create, update, exclude };
