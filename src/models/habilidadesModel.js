const { Habilidade } = require('../database/sequelize/models/');
const { extractValues } = require('../helper/sequelizeFunctions');

const getAll = async () => {
  const result = await Habilidade.findAll();
  return result.map(extractValues);
};

const getById = async (id) => {
  const result = await Habilidade.findByPk(id);
  return extractValues(result);
};

const create = async ({ name, level }) => {
  const result = await Habilidade.create({ name, level });
  return extractValues(result);
};

const update = async ({ level, name, id }) => {
  const result = await Habilidade.update({ level, name }, { where: { id } });
  return result;
};

const exclude = async (id) => {
  const result = await Habilidade.destroy({ where: { id } });
  return result;
};

module.exports = { getAll, getById, create, update, exclude };
